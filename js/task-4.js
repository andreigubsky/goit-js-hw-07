


function validateForm() {
    const form = document.querySelector('form.login-form');
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const email = document.querySelector('[name="email"]').value.trim();
        const password = document.querySelector('[name="password"]').value.trim();
        if(email==="" || password===""){
            alert('All form fields must be filled in')
        }
        console.log("Email: "+email);
        console.log("Password: "+password);
        form.reset();
    });
}

validateForm();
