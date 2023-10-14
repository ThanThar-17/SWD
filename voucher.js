const fruits = {
  apple: 500,
  orange: 300,
  mango: 700,
  banana: 400,
};
function calcTax(amount, taxpercentage = 5) {
  let tax = (amount / 100) * taxpercentage;
  return tax;
}
let total = 0;
const voucher = [];
let voucherIndex = 0;

function buy(item, quantity) {
  let itemPrice = fruits[item];
  let cost = itemPrice * quantity;
  total = total + cost;
  let list = {
    item,
    price: itemPrice,
    quantity,
    cost,
  };
  voucher[voucherIndex++] = list;
  return cost;
}

buy("apple", 3);
buy("mango", 5);
buy("orange", 10);
buy("banana", 2);

console.table(voucher);
console.table({
  total,
  tax: calcTax(total),
  netTotal: total + calcTax(total),
});
