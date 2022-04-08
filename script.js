// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChars = arrayLowHigh(97, 122);

var upperCaseChars = arrayLowHigh(65, 90);

var numberChars = arrayLowHigh(48, 57);

var specialChars = arrayLowHigh(33, 47).concat(arrayLowHigh(91, 96)).concat(arrayLowHigh(123, 126));

var generatedPassword = document.querySelector("#password");




// Write password to the #password input


function writePassword() {
  var passwordLength = prompt("How long should your password be? (8-128.)");

  //getting length number
  var passwordLengthNumber = Number.parseInt(passwordLength);

    //ensuring number is between 8 and 128
    while (passwordLengthNumber < 8 || passwordLengthNumber > 128) {

    var passwordLength = prompt("Please enter number between 8 and 128.");

    var passwordLengthNumber = Number.parseInt(passwordLength);

    }

  var uppercaseCheck = confirm("Include capital letters?");

  var numberCheck = confirm("Include numbers?");

  var specialCheck = confirm("Include special characters?");

  totalCharArray = generateTotalArray(uppercaseCheck, numberCheck, specialCheck);

  for (let index = 0; index < passwordLengthNumber; index++) {
    const element = array[index];
    
  }

  console.log(passwordLengthNumber, uppercaseCheck, numberCheck, specialCheck);
  console.log(lowerCaseChars, upperCaseChars, numberChars, specialChars);

}

function generateTotalArray(a, b, c) {
  let totalCharArray = lowerCaseChars;
  if (a == true){
    totalCharArray = totalCharArray.concat(upperCaseChars);
    }
    if (b == true){
    totalCharArray = totalCharArray.concat(numberChars);
    }
    if (c == true){
    totalCharArray = totalCharArray.concat(specialChars);
    }
    console.log(totalCharArray);
    console.log("JJJJJ");
}

function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}



function arrayLowHigh(low, high) {
  const numberArray = [] 
  for (let i = low; i <= high; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
