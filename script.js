// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordLength () {
  const passwordLength = prompt("How many characters? (at least 8 and no more than 128)");
  if (isLengthValid(passwordLength)) {
    return passwordLength;
  };
}

function isLengthValid (length) {
  return length >= 8 && length < 128;
}

function getPasswordParameters () {
  const includeLowercase = confirm("Include lowercase characters?");
  if (includeLowercase === true || includeLowercase === false) {
    const includeUppercase = confirm("Include uppercase characters?");
    if (includeUppercase === true || includeUppercase === false) {
      const includeNumeric = confirm("Include numeric characters?");    
      if (includeNumeric === true || includeNumeric === false) {
        const includeSpecialCharacters = confirm("Include special characters?");
        if (includeSpecialCharacters === true || includeSpecialCharacters === false) {
          const passwordParameters = { includeLowercase, includeUppercase, includeNumeric, includeSpecialCharacters };
          if (isParametersValid(passwordParameters)) {
            return passwordParameters;
          } else {
            getPasswordParameters();
          }
        }
      }
    }
  }
}

function isParametersValid (passwordParameters) {
  return Object.keys(passwordParameters).some((key) => {
    return passwordParameters[key] === true;
  });
}

function generatePassword (passwordLength, passwordParameters) {
  console.log(passwordParameters);

  let chars = '';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let special = '!@#$^&*()-_=+~';
  if (passwordParameters.includesUppercase) {
    chars += uppercase}
    if (passwordParameters.includeLowercase);{
      chars += lowercase}
      if (passwordParameters.includesNumber); {
        chars += numbers}
        if (passwordParameters.includesSpecial);{
          chars += special}

  // create string based on passwordParameters

  
 let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber, chars);
    password += chars.split('')[randomNumber];
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  const passwordLength = getPasswordLength();
  const passwordParameters = getPasswordParameters();
  const password = generatePassword(passwordLength, passwordParameters);
  const passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
