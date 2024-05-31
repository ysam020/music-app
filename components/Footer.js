import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../styles/styles";
import Slider from "@react-native-community/slider";
import { formatTime } from "../utils/formatTime";
import { Ionicons } from "@expo/vector-icons";
import { togglePlayback } from "../utils/togglePlayback";
import { playNextSong } from "../utils/playNextSong";
import { playPreviousSong } from "../utils/playPreviousSong";
import { audioFiles } from "../assets/audioFiles";

const Footer = ({
  duration,
  position,
  onSeek,
  sound,
  isLoading,
  isPlaying,
  setIsPlaying,
  currentIndex,
  setCurrentIndex,
  loadSound,
  currentSongName,
  setCurrentSongName,
}) => {
  useEffect(() => {
    setCurrentSongName(audioFiles[currentIndex]?.name || "");
  }, [currentIndex]);
  return (
    <View style={styles.footer}>
      <Slider
        style={{ width: "100%", padding: 0 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="transparent"
        onSlidingStart={() => setIsPlaying(false)}
        onValueChange={onSeek}
        disabled={!sound}
        tapToSeek={true}
      />
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{formatTime(position)}</Text>
        <Text style={styles.durationText}>{currentSongName}</Text>
        <Text style={styles.durationText}>{formatTime(duration)}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() =>
            playPreviousSong(
              currentIndex,
              setCurrentIndex,
              audioFiles,
              loadSound
            )
          }
        >
          <Ionicons
            name="play-skip-back"
            size={50}
            color="#fff"
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <TouchableOpacity
            onPress={() => togglePlayback(sound, isPlaying, setIsPlaying)}
          >
            {isPlaying ? (
              <Ionicons
                name="pause"
                size={50}
                color="#fff"
                style={styles.controlIcon}
              />
            ) : (
              <Ionicons
                name="play"
                size={50}
                color="#fff"
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() =>
            playNextSong(currentIndex, setCurrentIndex, audioFiles, loadSound)
          }
        >
          <Ionicons
            name="play-skip-forward"
            size={50}
            color="#fff"
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
