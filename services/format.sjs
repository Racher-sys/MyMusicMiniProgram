function countFormat(count) {
  if (count > 100000000) {
    return (count / 1000000000).toFixed(1) + "亿";
  }
  else if (count > 10000) {
    return (count / 10000).toFixed(1) + "万";
  } else {
    return count + "";
  }
}
function padLeftZero(num) {
  if (num < 10){
    return "0" + num;
  } else {
    return num;
  }

}
function durationFormat(duration) {
  duration = duration / 1000;
  const minuate = Math.floor(duration / 60);
  const second = Math.floor(duration) % 60;
  return padLeftZero(minuate) + ":" +padLeftZero(second);

}

export default {
  countFormat,
  durationFormat
}