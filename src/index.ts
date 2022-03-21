import emailValidator from 'email-validator';

const emailFieldBox = document.querySelector(
  '.email-form__input-box'
)! as HTMLDivElement;

const emailField = document.querySelector(
  '.email-form__field'
)! as HTMLInputElement;

const emailErrorEl = document.querySelector(
  '.email-form__error'
)! as HTMLSpanElement;

const form = document.querySelector('.email-form')! as HTMLFormElement;

let email = '';

emailField.addEventListener(
  'change',
  (e) => (email = (e.target as HTMLInputElement).value)
);

form.addEventListener('submit', (e): void => {
  e.preventDefault();

  // validate email input
  if (email === '') {
    emailErrorEl.innerHTML =
      'Whoops! It looks like you forgot to add your email';
  } else if (!emailValidator.validate(email)) {
    emailErrorEl.innerHTML = 'Please provide valid email address.';
  } else {
    emailErrorEl.innerHTML = '';
  }
});
