// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// TODO: Need to put " and \ in var special array
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\","]", "^", "_", "`", "{", "|", "}", "~"];

var passwordLength;

var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;

function generatePassword() {
  passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  console.log("Password length: " + passwordLength);

  if(!passwordLength) {
    alert("Value required");
  }
    // Can use while statement to repeat prompt
    else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password did not meet the requirements. Try again. Choose a length of at least 8 characters and no more than 128 characters.");
    console.log("Password length: " + passwordLength);
  }
    else {
    confirmLowercase = confirm("Click OK if you would like to use lowercase characters.");
    console.log("Lowercase: " + confirmLowercase);
    confirmUppercase = confirm("Click OK if you would like to use uppercase characters.");
    console.log("Uppercase: " + confirmUppercase);
    confirmNumeric = confirm("Click OK if you would liken to use numeric characters.");
    console.log("Numeric: " + confirmNumeric);
    confirmSpecial = confirm("Click OK if you would like to use special haracters.");
    console.log("Speical: " + confirmSpecial);
    confirmUppercase === false && confirmLowercase === false && confirmNumeric === false && confirmSpecial === false;
    alert("At least one character type should be selected.")
  }
}
