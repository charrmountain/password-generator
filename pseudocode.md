let lowerCaseChars = all the lowercase characters
let upperCaseChars = all the uppercase characters
let numberChars = all the number characters
let special = all the allowed special characters
When the user clicks generate
prompt user for number of chars
save result in variable called passwordLength
IF passwordLength is greater than 7 and less than 129
  assign each of the following results to variables
  let useNums = confirm user want to use numbers
  let useLcase = confirm user wants lowercase characters
  let useUcase = confirm user wants uppercase
  let useSpecial = confirm user wants special chars
  IF (useNums = true) OR (useLCase = true) OR (useUcase = true) OR (useSpecial = true)
    call generate password
    display the password
  END IF
END IF
IF passwordLength is <= 7 or >= 129
  alert user that password length needs to be 8 to 128
END IF
GENERATE PASSWORD
let password = an empty string
IF useLcase = true
  randomly pick a lower case letter
  add it to password
END IF













Message #office-hours


Thread
02-ask-the-class

