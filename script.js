// Run when countdown reaches 0
function birthdayCelebration() {

    // Stop the timer
    clearInterval(countdown);

    // Change countdown text
    document.getElementById("countdown").innerHTML =
        "🎉 HAPPY BIRTHDAY BEBUU ❤️ 🎂";

    // Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    // Play birthday music
    const music = document.getElementById("birthdayMusic");
    if (music) {
        music.play().catch(() => {});
    }

    // Show birthday popup
    alert("🎂 Happy Birthday Bebuu ❤️\nMay all your dreams come true! 💖");

    // Open surprise automatically after 3 seconds
    setTimeout(() => {
        document.getElementById("surpriseBtn").click();
    }, 3000);
}
