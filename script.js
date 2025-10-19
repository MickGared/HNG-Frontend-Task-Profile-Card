function updateTime() {
  const timeEl = document.getElementById("user-time");
  const now = new Date();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  const ms = String(now.getMilliseconds()).padStart(3, "0");

  timeEl.textContent = `${h}:${m}:${s}.${ms}`;
}

// Update every 10 milliseconds for smooth milliseconds display
setInterval(updateTime, 10);
updateTime();
