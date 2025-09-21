const form = document.querySelector('form.login-form');

function validateForm() {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.querySelector('[name="email"]').value.trim();
    const password = document.querySelector('[name="password"]').value.trim();
    if (email === '' || password === '') {
      return alert('All form fields must be filled in');
    }
    console.log(`Login: ${form.email.value}, Password: ${form.password.value}`);
    form.reset();
  });
}
validateForm();
