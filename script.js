// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 2800);
});

// SOUND
const soundToggle = document.getElementById("sound-toggle");
const bootSound = document.getElementById("boot-sound");
const glitchSound = document.getElementById("glitch-sound");
let soundEnabled = true;

window.addEventListener("load", () => {
  if (soundEnabled) {
    bootSound.volume = 0.6;
    bootSound.play().catch(() => {});
  }
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? "🔈" : "🔇";
});

// GLITCH PAGE TRANSITION
const glitchOverlay = document.getElementById("glitch-overlay");
const links = document.querySelectorAll("a");

links.forEach(link => {
  if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (soundEnabled) glitchSound.play().catch(() => {});
      glitchOverlay.style.animation = "glitchEffect 0.6s ease";
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  }
});
