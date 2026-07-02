const dropDate = new Date("2026-09-01T20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = dropDate - now;

  const countdown = document.querySelector(".countdown");

  if (distance <= 0) {
    countdown.innerHTML = "<p>Drop is live.</p>";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);