window.addEventListener("load", timeFormat);

function timeFormat() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour > 12) {
    hour = "0" + (hour % 12);
  } else if (hour === 12) {
    hour === hour;
  } else if (hour < 12) {
    hour = "0" + hour;
  }

  let minutes = minute < 10 ? "0" + minute : minute;
  let seconds = second < 10 ? "0" + second : second;
  let am_pm = hour > 12 ? "PM" : "PM";
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
  document.getElementById("am_pm").innerText = am_pm;
}

setInterval(timeFormat, 100);
