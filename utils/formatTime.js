export function formatTime(time) {
  if (!isNaN(time)) {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
  } else {
    return "0:00";
  }
}
