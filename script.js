// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() //when this function executes it will be stored into password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var passwordLength = window.prompt("Enter a number between 8 and 128:");
    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      return "Please enter a number between 8 and 128"
    }
  var booLowercase = window.confirm("Would you like lowercase characters to be included? Enter Y or N:");


  var booUppercase = window.confirm("Would you like UPPERCASE characters to be included? Enter Y or N:");


  var booNumeric = window.confirm("Would you like numeric characters to be included? Enter Y or N:");


  var booSpecial = window.confirm("Would you like special characters to be included? Enter Y or N:");

  var charPool = []
  if (booLowercase) {

  }
}
//☕☕ notes

  for (var i = 0; i < passwordLength.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
  }

//  ☕☕ cogs
    if (!passwordLength) {
      // return;
    } 
    if (passwordLength !== typeof "number"){
      // return;
    }
  



//How do I create the character pool that the password creating will draw from using the boolean values set by user in prompts above?
var charLowercase = "abcdefghijklmnopqrstuvwxyz"
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charNumeric = "1234567890"
var charSpecial = ",./<>?;:[]{}!@#$%^&*()`~-=_+"

// function charPool() {
//   (if (booLowercase == true)) { 
//     [charLowercase] +
//   }; 
//   (if (booUppercase == true)) {
//     [charUppercase] +
//   };
//   (if (booNumeric == true)) {
//     [charNumeric] +
//   };
//   (if (booSpecial == true)) { 
//     [charSpecial] 
//   };
// }

