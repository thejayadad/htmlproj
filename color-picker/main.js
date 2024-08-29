const colorPicker = document.getElementById('color-picker');
const colorDisplay = document.getElementById('color-display');

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
});