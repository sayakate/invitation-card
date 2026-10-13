
const eventDate = new Date("2026-11-12T18:00:00+05:30").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {
    const remaining = eventDate - Date.now();

    if (remaining <= 0) {
        countdown.innerHTML =
            "<p>Today is the special day! ❤️</p>";
        return;
    }

    const units = [
        ["Days", 86400000],
        ["Hours", 3600000],
        ["Minutes", 60000],
        ["Seconds", 1000]
    ];

    countdown.innerHTML = units.map(([label, size]) => {
        const value = label === "Days"
            ? Math.floor(remaining / size)
            : label === "Hours"
                ? Math.floor((remaining / size) % 24)
                : label === "Minutes"
                    ? Math.floor((remaining / size) % 60)
                    : Math.floor((remaining / size) % 60);

        return `
            <div>
                <strong>${String(value).padStart(2, "0")}</strong>
                <span>${label}</span>
            </div>
        `;
    }).join("");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Floating rose petals
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["✿", "❀", "✧", "♡"];

function createPetal() {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent =
        petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (12 + Math.random() * 14) + "px";
    petal.style.animationDuration = (7 + Math.random() * 7) + "s";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend", () => petal.remove());
}

setInterval(createPetal, 550);


// Share invitation on WhatsApp
function shareInvitation() {
    const message =
        "💍 Engagement Invitation 💍\n\n" +
        "Mayur ❤️ Shruti\n\n" +
        "With love, the Mate Family invites you to celebrate " +
        "their engagement on 12th November 2026.\n\n" +
        "📍 Nakshtra Lawns, Pune\n\n" +
        "We look forward to celebrating with you! 🌸\n\n" +
        window.location.href;

    const url =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
}
