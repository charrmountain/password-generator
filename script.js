// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


function generatePassword() {

    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["!", "#", "$", "%", "&", "()", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


    //ask about 
    // TODO: Write code so the generatePassword returns a string for a password
    // which meets the requirements in the instructions.

    //confirm length by user

    var userLength = prompt("choose a length of at least 8 characters and no more than 128 characters");

    //confirm the choices by user
    var lowercaseChoice = confirm("Do you want lowercase letters?");
    var uppercaseChoice = confirm("Do you want uppercase letters?");
    var numericChoice = confirm("Do you want numeric characters?");
    var specialChoice = confirm("Do you want special symbols??");

    //array to store the sequences
    var passwordChoice = [];
    var userPassword = "";

    //testing to see what user wanted in password THEN sending back to array
    if (lowercaseChoice === true) {
        passwordChoice = passwordChoice.concat(lowercase);
    }
    if (uppercaseChoice === true) {
        passwordChoice = passwordChoice.concat(uppercase);
    }
    if (numericChoice === true) {
        passwordChoice = passwordChoice.concat(numeric);
    }
    if (specialChoice === true) {
        passwordChoice = passwordChoice.concat(special);
    }

    console.log(passwordChoice)


    //parameters
    if (lowercaseChoice === false && uppercaseChoice === false && numericChoice === false
        && specialChoice === false || userLength < 8 || userLength > 128) { alert("Password Unacceptable"); }

    //function for password
    else {
        for (var i = 0; i < userLength; i++) {
            //spot to put new password
            var random = passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
            userPassword += random;
        }

        console.log(userPassword)
        //send back
        return userPassword;
    }
}
