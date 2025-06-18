let input = document.getElementById("value");
let toCelcius = document.getElementById("toCelcius");
let toFahrenheit = document.getElementById("toFahrenheit");
let result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = temp * 5/9 + 32;
    result.textContent = temp.toFixed(1) + "F";
  } else if (toCelcius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "C";
  } else {
    result.textContent = "Please enter a unit";
  }
}
