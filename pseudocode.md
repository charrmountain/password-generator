let lowercase = all the lowercase characters
let uppercase = all the uppercase characters
let numeric = all the number characters
let special = all the allowed special characters
When the user clicks generatePassword
prompt user for number of chars
save result in variable called passwordLength
IF passwordLength is greater than 7 and less than 129
  assign each of the following results to variables
  let lowercaseChoice = confirm user want to use numbers
  let uppercaseChoice = confirm user wants lowercase characters
  let numericChoice = confirm user wants uppercase
  let specialChoice = confirm user wants special chars
  IF (lowercaseChoice = true) OR (uppercaseChoice = true) OR (numericChoice = true) OR (specialChoice = true)
  send true statements into empty array
    END IF
  let passwordChoice = an empty array (needs to be at top)
  END IF
IF passwordLength is <= 7 or >= 129
  alert user that password length needs to be 8 to 128 and categories need to be picked.
END IF
ELSE
GENERATE PASSWORD
  need a random variable (i) to randomly select by the amount of times the user selected as their "userLength" or password length. 

  var random = the now filled array of passwordChoice and the using Math.floor(Math.random()* passwordChoice.length aka the arrays length)

  then the FINAL userPassword needs to be an empty string for the password to be "returned"

  the FINAL userPassword that was created at the variable random needs to be added to the end of the empty string, in so making it the password!!!!
END IF















Message #office-hours


Thread
02-ask-the-class

