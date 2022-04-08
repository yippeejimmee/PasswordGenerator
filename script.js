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
  //checking with user if they want to include capital letters, numbers, or special characters
  var uppercaseCheck = confirm("Include capital letters?");

  var numberCheck = confirm("Include numbers?");

  var specialCheck = confirm("Include special characters?");

  //calling function generateTotalArray with the arguments received by user
  generatedPassword = generateTotalArray(uppercaseCheck, numberCheck, specialCheck, passwordLengthNumber);

  //showing the generated password on the webpage
  displayPassword.textContent = generatedPassword;

}

//the function for creating password
function generateTotalArray(upperCase, lowerCase, special, passwordLength) {

  let totalCharArray = lowerCaseChars;

  //adding the arrays of the different letters and symbols to total array if the user wants to
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

  //iterating through each array and pushing it to array createdPassword while also changing the index from a charcode to actual letters and symbols
  for (let i = 0; i < passwordLength; i++) {

    const char = totalCharArray[Math.floor(Math.random() * totalCharArray.length)]

    createdPassword.push(String.fromCharCode(char))
  }

  //returns the created password as a string
  return createdPassword.join('');

}

//function for creating array of lowercase, uppercase, special case, and number character codes by iterating through and pushing to appropriate array
function arrayLowHigh(low, high) {

  const numberArray = []

  for (let i = low; i <= high; i++) {

    numberArray.push(i);

  }

  return numberArray;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);