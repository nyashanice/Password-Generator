// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charactersArr = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  // Asks user how many characters they would like and changes value type to number
  var length = prompt("How many characters (between 8-128) would you like the password to be?");
  var passwordLength = parseInt(length);
  let passwordArray = new Array();
  // Prevents user from entering a number outside of allowed length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return generatePassword()
  }
  console.log(length);
  // Confirms uppercase letters and adds array to password array
  var uppercase = confirm("Click OK if you would like to include uppercase letters. Otherwise, click cancel.");
  if (uppercase == true) {
    passwordArray = passwordArray.concat(uppercaseLetters)
  }
  // Confirms lowercase letters and adds array to password array
  var lowercase = confirm("Click OK if you would like to include lowercase letters. Otherwise, click cancel.");
  if (lowercase == true) {
    passwordArray = passwordArray.concat(lowercaseLetters)
  }
  // Confirms numeric values and adds array to password array
  var numeric = confirm("Click OK if you would like to include numeric values. Otherwise, click cancel.");
  if (numeric == true) {
    passwordArray = passwordArray.concat(numbersArr)
  }
  // Confirms special character and adds array to password array
  var specialChar = confirm("Click OK if you would like to include special characters. Otherwise, click cancel.");
  if (specialChar == true) {
    passwordArray = passwordArray.concat(charactersArr)
  }

  if (passwordArray == []) {
    alert("You must select at least one data type")
    return generatePassword()
  }
  // Randomizes password array for the length that the user chose
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomValue = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    password = password.concat(randomValue)
    console.log(password)
  }
  // Returns content from password variable to page so that the user can see
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
