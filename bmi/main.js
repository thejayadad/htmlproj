const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) * 0.0254; // Convert inches to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        bmiResult.textContent = `Your BMI: ${bmi}`;
        bmiCategory.textContent = getBMICategory(bmi);
    } else {
        bmiResult.textContent = 'Please enter valid values';
        bmiCategory.textContent = '';
    }
});

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Category: Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Category: Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Category: Overweight';
    if (bmi >= 30) return 'Category: Obesity';
}
