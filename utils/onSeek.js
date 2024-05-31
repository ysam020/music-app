export async function onSeek(value) {
  if (sound) {
    setPosition(value);
    await sound.setPositionAsync(value);
  }
}
