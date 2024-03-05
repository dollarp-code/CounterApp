// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.textContent++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.textContent--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.textContent = 0;
    setColor();
  }
});

function setColor() {
  if (count.textContent > 0) {
    count.style.color = "yellow";
  } else if (count.textContent < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}
