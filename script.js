// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "SIGMA BRAINROT 0101010101 🗿⚡";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++)
    drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff99";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// SIGMA QUOTES
const quotes = [
    "Silence is louder than words.",
    "They scroll. I build.",
    "Emotion is optional.",
    "Aura > Opinion.",
    "You wouldn’t understand."
];

setInterval(() => {
    document.getElementById("quote").innerText =
        quotes[Math.floor(Math.random() * quotes.length)];
}, 3000);

// AURA SYSTEM
let aura = 0;
let mind = 100;

function increaseAura() {
    aura += Math.floor(Math.random() * 50);
    mind -= 5;

    document.getElementById("aura").innerText = aura;
    document.getElementById("mind").innerText = mind;

    if (aura > 1000) {
        document.body.style.background = "darkred";
    }
}

// SHAKE EFFECT
function triggerShake() {
    document.body.classList.add("shake");
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 500);
}
