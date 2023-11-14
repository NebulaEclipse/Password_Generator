//AssignmentCode

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")

//All upper, lower, number and character variables that are usable for passwords
var numValues = ["0123456789"];
var uppercaseValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseValues = ["abcdefghijklmnopqrstuvwxyz"];
var specialValues = ["!@#$%^&*()_-=+[{]}/|~`.?"];
var possibleCharacters = "";

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  event.preventDefault();

  password.value = "";
  var newPassword = "";
  //asks user to choose what they want in their password
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  var lowercaseOption = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseOption = confirm("Do you want your password to contain uppercase letters?");
  var numOption = confirm("Do you want your password to contain numbers?");
  var specialOption = confirm("Do you want your password to contain special characters?");
//checks to see if password is in between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 characters and 128 characters.");
    passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  }

  if (!lowercaseOption && !uppercaseOption && !numOption && !specialOption) {
    alert("Must choose at least one option to generate a password.");
  }

  if (lowercaseOption) {
    possibleCharacters += lowercaseValues;
  }

  if (uppercaseOption) {
    possibleCharacters += uppercaseValues;
  }

  if (numOption) {
    possibleCharacters += numValues;
  }

  if (specialOption) {
    possibleCharacters += specialValues;
  }

  for (var i = 0; i < passwordLength; i++) {
    newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  password.value = newPassword;
}

