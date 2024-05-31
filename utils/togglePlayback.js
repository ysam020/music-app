export async function togglePlayback(sound, isPlaying, setIsPlaying) {
  if (sound) {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }
}
