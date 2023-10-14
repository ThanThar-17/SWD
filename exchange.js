const rates = {
  USD: 2100,
  SGD: 1579,
  EUR: 2335,
};
// console.log(rates.USD);
// console.log(rates["EUR"]);
function toMMK(amount, currency) {
  let exchangeRate = rates[currency];
  return amount * exchangeRate;
}
//   console.log(toMMK(100, "USD"));

function tocurrency(amount, currency) {
  let exchangeRate = rates[currency];
  return amount / exchangeRate;
}
//   console.log(tocurrency(100000, "USD"));
function exchange(amount, fromCurrency, toCurrency) {
  let mmk= toMMK(amount,fromCurrency);
  return tocurrency(mmk,toCurrency);
}
console.log(exchange(100, "USD", "SGD"));
