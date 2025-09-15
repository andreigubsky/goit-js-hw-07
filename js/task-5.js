function changeBodyColor() {
    const htmlBody = document.querySelector('body');
    const span = document.querySelector('span.color');
    const changeColorBtn = document.querySelector('button.change-color');
    changeColorBtn.addEventListener('click', () => {
        //getRandomHexColor();
        const color = getRandomHexColor();
        htmlBody.style.backgroundColor = color;
        span.textContent = color;
    });
}
changeBodyColor();

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}