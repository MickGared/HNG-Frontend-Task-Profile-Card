function updateTime() {
  const timeEl = document.getElementById("user-time");
   timeEl.textContent = Date.now();
}

  setInterval(updateTime, 1000);  // Update every second (reasonable tick; task allows "on an update tick")
updateTime();