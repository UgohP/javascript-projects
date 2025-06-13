let rollBtn = document.getElementById("rollBtn");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let min = 1;
let max = 6;
let randomNum1;
let randomNum2;

rollBtn.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  label1.textContent = `Dice 1: ${randomNum1}`;
  label2.textContent = `Dice 2: ${randomNum2}`;
};
