// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghigklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "\"~`!@#$%^&*()-_+={}|[]:;'<>?,./\\\'";

// Write password to the #password input
function writePassword() {
  var passwordLegth = prompt("Password Length (8-128)");

  if (passwordLegth < 8 || passwordLegth > 128 || passwordLegth === NaN ) {
   passwordLegth = confirm("Password must be a minimum of 8 and a max of 128 characters.");
   if (passwordLegth == true || passwordLegth == false){
    writePassword();
    return;
   }
   console.log(typeof passwordLegth);
  }
  var confirmLowercase = confirm("Would you like to use lowercaseletters?");
  var confirmUppercase = confirm("Would you like to use uppercase letters?");
  var confirmSymbols = confirm("Would you like to use special characters?");
  var confirmNumbers = confirm("Would you like to use numbers?");

  var lowercaseConfirm = "" ;
  if (confirmLowercase == true){
  var lowercaseConfirm = lowercaseConfirm + lowercase;
  }

  var uppercaseConfirm = "" ;
  if (confirmUppercase == true){
  var uppercaseConfirm = uppercaseConfirm + uppercase;
  }

  var symbolConfirm = "" ;
  if (confirmSymbols == true){
  var symbolConfirm = symbolConfirm + symbols;
  }

  var numberConfirm = "" ;
  if (confirmNumbers == true){
  var numberConfirm = numberConfirm + numbers;
  }

  var passwordCharacters = uppercaseConfirm + lowercaseConfirm + symbolConfirm + numberConfirm;

  console.log(passwordLegth);
  console.log(confirmLowercase);
  console.log(confirmUppercase);
  console.log(confirmSymbols);
  console.log(confirmNumbers);
  console.log(passwordCharacters);

function generatePassword() {
  var result = "";
  var characters       = passwordCharacters
  var charactersLength = characters.length;
  for ( var i = 0; i < passwordLegth; i++ ) {
    result += passwordCharacters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(generatePassword(passwordLegth)); 


  var password = generatePassword(passwordLegth);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
