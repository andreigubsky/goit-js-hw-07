const form = document.querySelector('form.login-form');

function validateForm() {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.querySelector('[name="email"]').value.trim();
    const password = document.querySelector('[name="password"]').value.trim();
    if (email === '' || password === '') {
      return alert('All form fields must be filled in');
    }
    const obj = { email: form.email.value, password: form.password.value }
    console.log("{" + obj.email + ", " + obj.password + "}");
    form.reset();
  });
}
validateForm();
