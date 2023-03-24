// Assignment Code
var generateBtn = document.getElementById("generate");
var passwordSizeBox = document.getElementById("passwordInput");
var passwordText = document.querySelector("#password");



function generatePassword(passLen){
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = passLen-1;
  var password = "";
  
  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
  
    console.log(randomNumber)
    console.log(chars.substring)
  
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}



function writePassword() {

  if (passwordSizeBox.value < 128 && passwordSizeBox.value > 8){
    var password = generatePassword(passwordSizeBox.value);
    passwordText.value = password;
  } else {
    passwordText.textContent = "please enter a length between 8 - 132 character";
  }

}

generateBtn.addEventListener("click", writePassword);

