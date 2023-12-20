const form = document.querySelector('#form')
const name = document.querySelector('#name')
const num = document.querySelector('#num')
const mm = document.querySelector('#mm')
const yy = document.querySelector('#yy')
const one = document.querySelector('#one')

const groupName = document.querySelector('.group-name')
const groupNum = document.querySelector('.group-num')
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')

const right = document.querySelector('.right')

form.onsubmit = () => {
    if (!name.value){
        blankError(groupName)
    }
    if (!num.value){
        blankError(groupNum)
    }
    if (!mm.value){
        blankError(item1)
    }
    if (!yy.value){
        blankError(item2)
    }
    if (!one.value){
        blankError(item3)
    }
    if(!isValidCreditCardNumber(num.value)){
        numError(groupNum)
    }
    else{
        complete()
    }
    return false
}

const blankError = (parent) => {
    const p = document.createElement('p')
    p.textContent = 'Can\'t be blank.'
    p.style.cssText = `
        color: var(--Red);
        font-size: 12px;
    `
    parent.appendChild(p)
}
const numError = (parent) => {
    const p = document.createElement('p')
    p.textContent = 'Wrong format, numbers only!'
    p.style.cssText = `
        color: var(--Red);
        font-size: 12px;
    `
    parent.appendChild(p)
}

const complete = () => {
    right.innerHTML = ''

    const rightImg = document.createElement('div')
    rightImg.className = 'right-img'

    const righth2 = document.createElement('h2')
    righth2.className = 'right-h2'
    righth2.innerHTML = 'Thank you!'

    const rightPhar = document.createElement('p')
    rightPhar.className = 'right-phar'
    rightPhar.innerHTML = 'We\'ve added your card details'
    
    const rightBtn = document.createElement('button')
    rightBtn.className = 'right-btn'
    rightBtn.innerHTML = 'Continue'

    right.appendChild(rightImg)
    right.appendChild(righth2)
    right.appendChild(rightPhar)
    right.appendChild(rightBtn)

}

function isValidCreditCardNumber(cardNumber) {
    // Remove spaces and non-digit characters
    const cleanCardNumber = cardNumber.replace(/\D/g, '');
  
    // Check if the card number is numeric and has a valid length
    if (!/^\d+$/.test(cleanCardNumber) || cleanCardNumber.length !== 16) {
      return false;
    }
  
    // Convert the card number string to an array of digits
    const digits = cleanCardNumber.split('').map(Number);
  
    // Reverse the array and double every second digit
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      if (digits[i] > 9) {
        digits[i] -= 9;
      }
    }
  
    // Sum all the digits
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
  
    // Check if the sum is a multiple of 10
    return sum % 10 === 0;
  }
  
  // Example usage:
  const creditCardNumber = '4111 1111 1111 1111';
  const isValid = isValidCreditCardNumber(creditCardNumber);
  
  console.log(`Credit card number ${creditCardNumber} is ${isValid ? 'valid' : 'invalid'}.`);
  