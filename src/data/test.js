export function start(minitus) {
  const setMin = minitus - 1;
  let min = setMin;
  let sec = 60;
  function coundown() {
    if (sec === 0 && min === 0) {
      console.log("stop interval");
      clearInterval(time);
      return;
    }
    sec -= 1;
    if (sec <= 0 && min > 0) {
      min -= 1;
      sec = 60;
    }

    const formatTime = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
    // console.log(formatTime);
    return formatTime;
  }
  const time = setInterval(coundown, 1000);
  time;
}
