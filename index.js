const mainDiv = document.getElementById("main");
if (!mainDiv) {
  console.error("Element with ID 'main' not found in the document.");
}

const countdownDiv = document.getElementById("countdown");
if (!countdownDiv) {
  console.error("Element with ID 'main' not found in the document.");
}
const birthdayDiv = document.getElementById("birthday");
if (!birthdayDiv) {
  console.error("Element with ID 'birthday' not found in the document.");
}

function startRomanticConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.id = "confetti-container";
  confettiContainer.style.position = "fixed";
  confettiContainer.style.top = "0";
  confettiContainer.style.left = "0";
  confettiContainer.style.width = "100%";
  confettiContainer.style.height = "100%";
  confettiContainer.style.pointerEvents = "none";
  confettiContainer.style.zIndex = "1000";
  document.body.appendChild(confettiContainer);

  const romanticColors = [
    "#FFB6C1",
    "#FFC0CB",
    "#FFD1DC",
    "#FF69B4",
    "#FF1493",
  ];
  const confettiCount = 200;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.borderRadius = "50%";
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    confetti.style.backgroundColor = "transparent";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.clipPath =
      "path('M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z')";
    confetti.style.backgroundImage = `radial-gradient(circle, ${
      romanticColors[Math.floor(Math.random() * romanticColors.length)]
    }, ${romanticColors[Math.floor(Math.random() * romanticColors.length)]})`;
    confettiContainer.appendChild(confetti);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
  setTimeout(() => {
    confettiContainer.style.transition = "opacity 1s ease-out";
    confettiContainer.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
      document.head.removeChild(style);
    }, 1000);
  }, 5000);
}

const nextButton = document.getElementById("next-button");
if (nextButton) {
  nextButton.style.display = "none";
}
if (countdownDiv && birthdayDiv) {
  birthdayDiv.style.display = "none";

  const interval = setInterval(() => {
    const targetDate = new Date("2025-05-28T00:00:00+05:30");
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval);
      mainDiv.style.display = "none";
      birthdayDiv.style.display = "block";
      nextButton.style.display = "block";
      startRomanticConfetti();
      console.log("Countdown complete.");
      return;
    }

    const days = String(
      Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((timeDifference / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(
      2,
      "0"
    );

    countdownDiv.textContent = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
}

nextButton.addEventListener("click", () => {
  birthdayDiv.style.display = "none";
  nextButton.style.display = "none";

  const loveQuestionDiv = document.createElement("div");
  loveQuestionDiv.id = "love-question";

  const questionHeading = document.createElement("h1");
  questionHeading.textContent = "Do you love me?";
  loveQuestionDiv.appendChild(questionHeading);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttons";

  const yesButton = document.createElement("button");
  yesButton.id = "yes-button";
  yesButton.textContent = "Yes";
  buttonsDiv.appendChild(yesButton);

  const noButton = document.createElement("button");
  noButton.id = "no-button";
  noButton.textContent = "No";
  buttonsDiv.appendChild(noButton);

  loveQuestionDiv.appendChild(buttonsDiv);
  document.body.appendChild(loveQuestionDiv);

  noButton.addEventListener("click", () => {
    buttonsDiv.removeChild(noButton);

    const message = document.createElement("p");
    message.textContent = "Why do I even give you an option? 😒";
    buttonsDiv.appendChild(message);
  });

  yesButton.addEventListener("click", () => {
    document.body.removeChild(loveQuestionDiv);
    const reasonsDiv = document.createElement("div");
    reasonsDiv.id = "reasons-div";

    const reasonsHeading = document.createElement("h1");
    reasonsHeading.textContent = "29 Reasons Why I Love You";
    reasonsDiv.appendChild(reasonsHeading);

    const reasonsList = document.createElement("ol");
    const reasons = [
      "Your energitic zoomies 😻",
      "Your fluffy hair and beard 😍",
      "Your infectious laughter",
      "How you solve any problem like a pro",
      "Your mutta kannu 👀",
      "Your age hot as hell 🥵",
      "Your white hair",
      "How you make my every day better ❤️",
      "Your thighs 🙂",
      "Your belly button 😏",
      "Your dad jokes",
      "Your hugs and cuddles 🤗",
      "Your voice 🤤",
      "How you always know what to say",
      "Your patience",
      "How you support me",
      "Your positive attitude",
      "How you make me feel loved 💕",
      "Your Jugaad skills",
      "Your cooking skills",
      "Your smell 😘",
      "How you never give up",
      "How you inspire me to be more responsible",
      "Your cuteness overload 🥰",
      "How you make my every moment with you special",
      "Your warmth",
      "Coz you my angel 😇",
      "How you can always cheer me up",
      "Everything that makes you, you 💖",
    ];
    reasons.forEach((reason) => {
      const li = document.createElement("li");
      li.textContent = reason;
      reasonsList.appendChild(li);
    });
    reasonsDiv.appendChild(reasonsList);

    document.body.appendChild(reasonsDiv);
  });
});
