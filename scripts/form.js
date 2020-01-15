// Create the invisible form first
const form = document.createElement('form')
form.setAttribute('novalidate', true)

const closeButton = document.createElement('span')
closeButton.innerText = 'x'

const formTitle = document.createElement('h3')
formTitle.innerText = "Sign in with email"

const formBody = document.createElement('p')
formBody.innerText = "Enter the email address associated with your account, and we’ll send a magic link to your inbox."

const formField = document.createElement('fieldset')
const formFieldLabel = document.createElement('label')
formFieldLabel.innerText = "Your email:"

const formFieldInput = document.createElement('input')
formFieldInput.setAttribute('name', 'email')

formFieldLabel.appendChild(formFieldInput)
formField.append(formFieldLabel)

const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit')
submitButton.innerText = "Continue"

form.appendChild(closeButton)
form.appendChild(formTitle)
form.appendChild(formBody)
form.appendChild(formField)
form.appendChild(submitButton)

document.querySelector('body').appendChild(form)

// https://emailregex.com/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Reason i'm doing the form validation myself is that it enables me to use the wobble effect when the form is invalid, otherwise chrome does it's own tooltip which cancels out my animation by focusing the email field
form.addEventListener('submit', () => {
  event.preventDefault()

  const email = form.email.value;

  if (document.querySelector('form').classList.value.indexOf('success') > 0) {
    window.localStorage.setItem('setEmail', true)
    return window.location.href = window.location.href
  }

  switch (emailRegex.test(String(email).toLowerCase())) {
    case true:
      form.classList.add('success')
      document.querySelector('body > form > p').innerText = "Success"
      document.querySelector('body > form > button').innerText = "Close modal"

      break;
    default:
      form.email.setCustomValidity("Invalid field.")
  }
});

// Remove invalid when user makes change to input's value via keydown
form.email.addEventListener("keydown", () => {
  form.email.setCustomValidity('')
});

// Remove invalid when focusing so it can revalidate on submit
form.email.addEventListener("focus", () => {
  form.email.setCustomValidity('')
});

// Add eventlistener to every button with Get started (there are multiple)
const buttons = document.querySelectorAll('button')

for (i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText === 'Get started') {
    buttons[i].addEventListener('click', () => {
        document.querySelector('body').classList.add('modal')

        form.classList.add('active')

    })
  }
}

closeButton.addEventListener('click', () => {
  document.querySelector('body').classList.remove('modal')

  form.classList.remove('active')
})
