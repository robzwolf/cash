const route = new URL(window.location.href);
const rawAmount = route.pathname.replace("/","");
const amount = parseFloat(rawAmount).toFixed(2);
console.log(amount, rawAmount);

const container = document.querySelector("main");
const subtitle = document.querySelector(".subtitle");
const printedAmount = document.querySelector(".subtitle .amount");
const applePayButton = document.querySelector(".apple-pay");
const paypalButton = document.querySelector(".paypal");
const debitCardButton = document.querySelector(".debit-card");

if (rawAmount) {
    printedAmount.innerHTML += amount;
    subtitle.classList.remove("hidden");

    applePayButton.href += amount;
    paypalButton.href += amount;
    debitCardButton.href += amount;

}

// If Apple Pay is enabled, show the Apple Pay button
if (window.ApplePaySession) {
    applePayButton.classList.remove("hidden");
}

// Wait half a second before displaying everything to wait for the images to load
setTimeout(() => {
    container.classList.remove("hidden");
}, 500);
