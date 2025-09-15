function validateForm() {
    const form = document.querySelector('form.login-form');
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const email = document.querySelector('[name="email"]').value;
        const password = document.querySelector('[name="password"]').value;
        if(email==="" || password===""){
            alert('All form fields must be filled in')
        }
        console.log(event.currentTarget.value);
        console.log("Email: "+email);
        console.log("Password: "+password);

    });
}

validateForm();