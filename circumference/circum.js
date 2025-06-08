const PI = Math.PI;
let radius;
let circumference;

document.getElementById("calculate").onclick = function () {
  radius = document.getElementById("input").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("circum").textContent = circumference + "cm";
};
