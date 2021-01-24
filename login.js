// 1. get DOM element
const form = document.querySelector('#form')

// const jobsList = document.querySelector('a')

// GamepadButton.addEventListener('click')

// onclick

// button 
// querySelector

// wrap this around click function

console.log(form)

form.addEventListener('submit', function () {
  // e.preventDefault()

// const newElement = document.createElement("div")

// const mylink = document.querySelector('#bttn')

// mylink.innerHTML=`$`

//   `<a href="./search-display.html"></a>`

  validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password1)
  validateEmpty(password2)

  // validateMinLength(username)
  // validateMinLength(password2)
  // validateIsEmail(email)

  validatePassMatch(password2, password1)

  //@TODO: Code Challenge 5c: Starting from your refactored code,
  // 1. Implement and use the  validatePassMatch() function to confirm both passwords match
  // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  // validateIsEmail(email)

})

function validateEmpty(input) { 
  if (input.value === '') {
    showError(input, `${input.name} is empty`)
  } else {
    showSuccess(input)
  }
}

function showError (input, msg) {
  input.nextElementSibling.innerHTML = `<small class="text-white uppercase">❌ ${msg}</small>`
  input.className='error'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = `<small class="text-white ">✅ </small>`
  input.className= 'success-input'
}

function validateIsEmail (email) {
  // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // console.log(re)
  if (emailValidates(email)) {
    showSuccess(email)
  } else {
    showError(email)
  }
}

function emailValidates (email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return true
}
// console.log(emailValidates)
  
function validatePassMatch (password1, password2) {
  if (password2.value != password1.value) {
    showError(password2, "does not match")
  } 
}


function validateMinLength (input) {
  console.log(input.value.length)
  if (input.value.length < 5 || input.value.length > 14) {
  showError(input)
  } else {
    showSuccess(input)
  }
}
