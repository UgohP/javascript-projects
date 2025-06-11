let subscribe = document.getElementById("subscribe");
let visa = document.getElementById("visaBtn");
let mastercard = document.getElementById("masterBtn");
let verve = document.getElementById("verveBtn");
let submitBtn = document.getElementById("submitBtn");
let subscribeTxt = document.getElementById("subscribeTxt");
let paymentTxt = document.getElementById("paymentTxt");

submitBtn.onclick = function () {
  if (subscribe.checked) {
    subscribeTxt.textContent = `You have subscribed`;
  } else {
    subscribeTxt.textContent = `You have not subscibe yet`;
  }
  if (visa.checked) {
    paymentTxt.textContent = `You are paying with visa`;
  } else if (mastercard.checked) {
    paymentTxt.textContent = `You are paying with Master Card`;
  } else if (verve.checked) {
    paymentTxt.textContent = `You are paying with verve card`;
  } else {
    paymentTxt.textContent = `Please, select a payment method`;
  }
};
