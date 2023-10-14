//Object method
const obj = {
  a: "aaa",
  b: "bbb",
  c: function () {
    return `This is c method`;
  },
  d() {
    return `This is d method`;
  },
};
console.log(obj.c());
console.log(obj.d());

const exchangeCenter = {
  name: "MMS Money Exchange",
  address: "No.49 San Chaung",
  openHours: {
    open: "9 AM",
    close: "8 PM",
  },
  exchangeRate: [
    {
      currency: "USD",
      rate: 2100,
    },
    {
      currency: "SGD",
      rate: 1500,
    },
  ],
  intro() {
    return `This is ${this.name} and located in ${this.address} and open at ${this.openHours.open}`;
  },
  exchange: function (amount, fromCurrency, toCurrency) {
    //logic
    return "This is exchange";
  },
};
console.log(exchangeCenter.openHours.open);
console.log(exchangeCenter.intro());

