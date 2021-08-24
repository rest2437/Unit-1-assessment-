let sumAmount = document.querySelector(".sum");
let addButton = document.querySelector(".add");
let subButton = document.querySelector(".sub");
let userInput = document.querySelector(".value");

function addNumbers() {
  let newValue = userInput.value + parseFloat(sumAmount.value);
}
console.log(parseFloat(sumAmount.value));
