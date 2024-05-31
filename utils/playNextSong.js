export async function playNextSong(
  currentIndex,
  setCurrentIndex,
  audioFiles,
  loadSound
) {
  if (currentIndex < audioFiles.length - 1) {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    console.log("Playing next song:", audioFiles[nextIndex].name);
    await loadSound(audioFiles[nextIndex]);
  }
}
