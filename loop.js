//start
//end
//increase ++,decrease --

for (let i = 1; i < 6; i++) {
  console.log("*");
  console.log("* *");
  console.log("* * *");
}
for (let i = 10; i >= 1; i--) {
  console.log(i + " loop");
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  } // 5 not include
  console.log(i, " loop");
}

//condition with array and object
const arr = ["a", "b", "c", "d", "e", "f", "g"];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);//
// }

for (x of arr) {
  console.log(x); //output=value only //array key  must be serial number like 0,1,2,3,4,5
}

for (key in arr) {
  console.log(key, arr[key]); //output datatype = string
}
