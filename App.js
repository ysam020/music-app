import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./styles/styles";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { audioFiles } from "./assets/audioFiles";
import { splitArrayIntoPairs } from "./utils/splitArrayIntoPairs";
import Footer from "./components/Footer";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSongName, setCurrentSongName] = useState("");

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  async function loadSound(audioFile) {
    setIsLoading(true);
    if (sound) {
      await sound.unloadAsync();
      setCurrentSongName(audioFile.name);
    }

    const soundObject = new Audio.Sound();
    try {
      const source = { uri: audioFile.url };
      await soundObject.loadAsync(source, { shouldPlay: true });
      setSound(soundObject);
      setIsLoading(false);

      soundObject.setOnPlaybackStatusUpdate((status) => {
        setIsPlaying(status.isPlaying);
        setPosition(status.positionMillis);
        setDuration(status.durationMillis);
      });
    } catch (error) {
      setIsLoading(false);
      console.error("Error loading audio file:", error);
    }
  }

  async function onSeek(value) {
    if (sound) {
      setPosition(value);
      await sound.setPositionAsync(value);
    }
  }

  const pairs = splitArrayIntoPairs(audioFiles);

  // Filter audio files based on search query
  const filteredAudioFiles = audioFiles.filter((audioFile) =>
    audioFile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("./assets/home-bg.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="musical-notes" size={36} color="#FF0000" />
          <Text style={styles.headerText}>Music</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search songs..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <ScrollView style={styles.container}>
          {pairs.map((pair, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {pair.map((item, columnIndex) => {
                const isFiltered = filteredAudioFiles.includes(item);
                return (
                  isFiltered && (
                    <TouchableOpacity
                      key={columnIndex}
                      style={styles.column}
                      onPress={() => loadSound(item)}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  )
                );
              })}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
      <Footer
        duration={duration}
        position={position}
        onSeek={onSeek}
        sound={sound}
        isLoading={isLoading}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        loadSound={loadSound}
        currentSongName={currentSongName}
        setCurrentSongName={setCurrentSongName}
      />
    </ImageBackground>
  );
}
