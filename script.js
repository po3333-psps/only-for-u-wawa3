function nextScreen(n) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
}

/* 😏 Troll button – moves small distance */
let moves = 0;
const btn = document.getElementById("runBtn");

btn.addEventListener("click", () => {
  moves++;
  if (moves < 3) {
    btn.style.transform = `translate(${Math.random() * 60 - 30}px, ${
      Math.random() * 60 - 30
    }px)`;
  } else {
    nextScreen(4);
  }
});
