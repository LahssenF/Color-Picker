const colors = [
  "#F2F0EA",
  "#FF921C",
  "#205A28",
  "#FFFDF2",
  "#970747",
  "#106EBE",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  while (colors[randomNumber] === document.body.style.backgroundColor) {
    randomNumber = getRandomNumber();
  }

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
