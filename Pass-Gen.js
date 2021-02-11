//Dom Elements
const resultEl = document.getElementbyid('result');
const lengthEl = document.getElementbyid('length');
const upperEl = document.getElementbyid('uppercase');
const lowerEl = document.getElementbyid('lowercase');
const numbersEl = document.getElementbyid('numbers');
const symbolsEl = document.getElementbyid('symbols');
const generateEl = document.getElementbyid('generate');
const clipboardEl = document.getElementbyid('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbol
};

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


//Generator functions

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols [Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbol());
