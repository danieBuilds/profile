const time = document.getElementById("user-time");
const now = Date.now();
time.textContent = " Current Time (ms) :   " + now;
// time.setAttribute("datetime", new Date(now));