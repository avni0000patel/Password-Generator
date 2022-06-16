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

// Var
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
var passwordCharacters;
var securePassword;
var password = "";

// Function
function generatePassword() {
  passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  console.log("Password length: " + passwordLength);

    if(!passwordLength) {
    alert("Value is required.");
  }
    else if(passwordLength < 8 || passwordLength > 128) {
    alert("Your password did not meet the requirements. Try again. Choose a length of at least 8 characters and no more than 128 characters.");
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
  };

    // If no criteria is selected.
    if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
    passwordCharacters = alert("At least one character type should be selected.");
  }
    // If all 4 criterias are selected.
    else if (confirmLowercase === true && confirmUppercase === true && confirmNumeric === true && confirmSpecial === true) {
    passwordCharacters = lowercase.concat(uppercase, numeric, special);
    console.log(passwordCharacters);
  }
    // If 3 criterias are selected.
    // If lowercase, uppercase, and numeric criterias are selected. Special criteria is not selected. 
    else if (confirmLowercase === true && confirmUppercase === true && confirmNumeric === true && confirmSpecial === false) {
      passwordCharacters = lowercase.concat(uppercase, numeric);
      console.log(passwordCharacters);
  }
    // If lowercase, uppercase, and special criterias are selected. Numeric criteria is not selected. 
    else if (confirmLowercase === true && confirmUppercase === true && confirmNumeric === false && confirmSpecial === true) {
      passwordCharacters = lowercase.concat(uppercase, special);
      console.log(passwordCharacters);
  }
    // If lowercase, numeric, and special criterias are selected. Uppercase criteria is not selected.
    else if (confirmLowercase === true && confirmUppercase === false && confirmNumeric === true && confirmSpecial === true) {
      passwordCharacters = lowercase.concat(uppercase, special);
      console.log(passwordCharacters);
  }
    // If uppercase, numeric, and special criterias are selected. Lowercase criteria is not selected.
    else if (confirmLowercase === false && confirmUppercase === true && confirmNumeric === true && confirmSpecial === true) {
      passwordCharacters = uppercase.concat(numeric, special);
      console.log(passwordCharacters);
  }

    // If 2 criterias are selected.
    // If lowercase and uppercase criterias are selected. Numeric and special criterias are not selected.
    else if (confirmLowercase === true && confirmUppercase === true && confirmNumeric === false && confirmSpecial === false) {
      passwordCharacters = lowercase.concat(uppercase);
      console.log(passwordCharacters);
  }
    // If lowercase and numeric criterias are selected. Uppercase and special criterias are not selected.
    else if (confirmLowercase === true && confirmUppercase === false && confirmNumeric === true && confirmSpecial === false) {
      passwordCharacters = lowercase.concat(numeric);
      console.log(passwordCharacters);
  }
    // If lowercase and special criterias are selected. Uppercase and numeric criterias are not selected.
    else if (confirmLowercase === true && confirmUppercase === false && confirmNumeric === false && confirmSpecial === true) {
      passwordCharacters = lowercase.concat(special);
      console.log(passwordCharacters);
  }
    // If uppercase and numeric criterias are selected. Lowercase and special criterias are not selected.
    else if (confirmLowercase === false && confirmUppercase === true && confirmNumeric === true && confirmSpecial === false) {
      passwordCharacters = uppercase.concat(numeric);
      console.log(passwordCharacters);
  }
    // If uppercase and special criterias are selected. Lowercase and numeric criterias are not selected.
    else if (confirmLowercase === false && confirmUppercase === true && confirmNumeric === false && confirmSpecial === true) {
      passwordCharacters = uppercase.concat(special);
      console.log(passwordCharacters);
  }
    // If numeric and special criterias are selected. Lowercase and uppercase criterias are not selected. 
    else if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === true && confirmSpecial === true) {
      passwordCharacters = numeric.concat(special);
      console.log(passwordCharacters);
  }
    // If only 1 criterias is selected.
    // Lowercase criteria is selected. Uppercase, numeric, and special criterias are not selected.
    else if (confirmLowercase === true && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
      passwordCharacters = lowercase;
      console.log(passwordCharacters);
  }
    // Uppercase criteria is selected. Lowercase, numeric, and special criterias are not selected.
    else if (confirmLowercase === false && confirmUppercase === true && confirmNumeric === false && confirmSpecial === false) {
      passwordCharacters = uppercase;
      console.log(passwordCharacters);
  }
    // Numeric criteria is selected. Lowercase, uppercase, and special criterias are not selected.
    else if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === true && confirmSpecial === false) {
      passwordCharacters = numeric;
      console.log(passwordCharacters);
  }
    // Special criteria is selected. Lowercase, uppercase, and numeric criterias are not selected.
    else if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === true) {
      passwordCharacters = special;
      console.log(passwordCharacters);
  };

    // Loop to generate a secure password.
    for (var i=0; i < passwordLength; i++) {
      password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
    // Return password 
    console.log("Your secure password is: " + password);
    return password;

}