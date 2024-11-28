// script.js

const exchangeRates = {
    USD: 1.0,
    INR: 81.8049,
    EUR: 0.85,
  };
  
  document.getElementById("convertButton").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    const resultDiv = document.getElementById("result");
  
    if (isNaN(amount) || amount <= 0) {
      resultDiv.innerHTML = "Please enter a valid amount.";
      resultDiv.style.color = "red";
      return;
    }
  
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      resultDiv.innerHTML = "Invalid currency selected.";
      resultDiv.style.color = "red";
      return;
    }
  
    const convertedAmount =
      (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
      2
    )} ${toCurrency}`;
    resultDiv.style.color = "green";
  });
  