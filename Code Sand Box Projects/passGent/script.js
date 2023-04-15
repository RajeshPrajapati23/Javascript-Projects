const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


// stored Random funct in Object
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbols: getRandomSymbol

}

generateEl.addEventListener('click', () => {
  const length = + lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked


  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);

})
// below parameter upper lower are keys and true or false are value as per checked or not
function generatePassword(upper, lower, number, symbols, length) {
  let generatedPasswoed = '';
  let typeCount = upper + lower + number + symbols; // it will count number as per true values and usage counting++ in loop
  // console.log('typeCount ', typeCount);

  let typeArr = [{ upper }, { lower }, { number }, { symbols }].filter(item => Object.values(item)[0]) //it will print values as true or false but filter()[0] it removes false value and usage in foreach
  // console.log('typeArr', typeArr);

  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach(type => {
      const funcName = Object.keys(type)[0] // show keys like upper lower..
      console.log('funcname', funcName);

      generatedPasswoed += randomFunc[funcName]() // upper lower.. keys become function

    })
  }
  let finalPass = generatedPasswoed.slice(0, length) // if slice() would not be applied then if there length is 1 but it print according typecount checked so print 4 checked
  return finalPass

}
// opy to clipboard 
clipboardEl.addEventListener("click", () => {
  let text = document.createElement("textarea");
  let password = resultEl.innerText;

  if (!password) {
    return;
  }
  text.value = password;
  document.body.appendChild(text);
  text.select()
  document.execCommand("copy")
  text.remove()
  alert("copy to clipboard")

})

// Generator function
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]~*="
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// console.log(randomFunc.lower());