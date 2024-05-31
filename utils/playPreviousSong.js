export async function playPreviousSong(
  currentIndex,
  setCurrentIndex,
  audioFiles,
  loadSound
) {
  if (currentIndex > 0) {
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex);
    console.log("Playing previous song:", audioFiles[previousIndex].name);
    await loadSound(audioFiles[previousIndex]);
  }
}
