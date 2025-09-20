(() => {
    const inputName = document.querySelector('input#name-input');
    const outputName = document.querySelector('span#name-output');
    inputName.addEventListener("input", (event) => {
        if(event.currentTarget.value !== ""){
            outputName.innerHTML=event.currentTarget.value.trim();
        }else{
            outputName.textContent = "Anonymous";
        }
    });
})()
