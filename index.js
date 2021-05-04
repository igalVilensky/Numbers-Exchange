/* const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year; */
let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const numberSystem = document.querySelector("#numberSystem");

function registerUserValue(e) {
  userNumber = e.target.value;
  convert();
}

/* const number = parseInt(prompt("Enter a decimal number: ")); */

// convert to binary
/* const result = number.toString(2); */

function convert() {
  let converted = 0;
  switch (numberSystem.value) {
    case "hex":
      converted = parseInt(userNumber).toString(16);
      break;

    case "binary":
      converted = parseInt(userNumber).toString(2);
      break;
    default:
      converted = 0;
  }
  console.log(converted);
  /* const num = 84;
  console.log(num.toString(16)); */
  result.innerHTML = converted;
}

numberSystem.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
