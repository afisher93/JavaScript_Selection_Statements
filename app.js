console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let favNumber = 69;
let guessNumber = prompt("what is my favorite number");

if (guessNumber == favNumber) {
  console.log("congratulations!!");
} else if (guessNumber > favNumber) {
  console.log("too high");
} else if (guessNumber < favNumber) {
  console.log(" too low");
}

let birthMonth = prompt("what is your birth month");
switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log("winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("summer");
    break;
  case "June":
  case "July":
  case "August":
    console.log("summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default:
    console.log("i dont recgonize this month...");
}
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "other";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`);
