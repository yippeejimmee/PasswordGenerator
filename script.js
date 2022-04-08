// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChars = arrayLowHigh(97, 122);

var upperCaseChars = arrayLowHigh(65, 90);

var numberChars = arrayLowHigh(48, 57);

var specialChars = arrayLowHigh(33, 47).concat(arrayLowHigh(91, 96)).concat(arrayLowHigh(123, 126));

var displayPassword = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long should your password be? (8-128.)");

  //getting length number
  var passwordLengthNumber = Number.parseInt(passwordLength);

  //ensuring number is between 8 and 128 and is number ror else repeat prompt
  while ((passwordLengthNumber < 8 || passwordLengthNumber > 128) || isNaN(passwordLengthNumber)){

    var passwordLength = prompt("Please enter number between 8 and 128.");

    var passwordLengthNumber = Number.parseInt(passwordLength);

  }

  var uppercaseCheck = confirm("Include capital letters?");

  var numberCheck = confirm("Include numbers?");

  var specialCheck = confirm("Include special characters?");

  generatedPassword = generateTotalArray(uppercaseCheck, numberCheck, specialCheck, passwordLengthNumber);

  console.log(generatedPassword);

  displayPassword.textContent = generatedPassword;

}

function generateTotalArray(upperCase, lowerCase, special, passwordLength) {

  let totalCharArray = lowerCaseChars;

  if (upperCase == true) {

    totalCharArray = totalCharArray.concat(upperCaseChars);

  }

  if (lowerCase == true) {

    totalCharArray = totalCharArray.concat(numberChars);

  }

  if (special == true) {

    totalCharArray = totalCharArray.concat(specialChars);

  }

  const createdPassword = []

  for (let i = 0; i < passwordLength; i++) {

    const char = totalCharArray[Math.floor(Math.random() * totalCharArray.length)]

    createdPassword.push(String.fromCharCode(char))
  }

  return createdPassword.join('');

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