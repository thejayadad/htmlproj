const colorButton = document.getElementById('colorButton');
const colorCode = document.getElementById('colorCode');

colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
});

function copyColorCode() {
    const color = colorCode.textContent;
    navigator.clipboard.writeText(color).then(() => {
        alert(`Copied color code: ${color}`);
    });
}
