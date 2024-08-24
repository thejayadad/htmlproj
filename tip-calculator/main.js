
const calculateButton = document.getElementById('calculate-btn')
const resultDiv = document.getElementById('result')

calculateButton.addEventListener('click', () => {
    const billAmount = parseFloat(document.getElementById('bill-amount').value)
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value)
    if(isNaN(billAmount) || isNaN(tipPercentage) || billAmount < 0 || tipPercentage < 0){
        resultDiv.textContent = 'Please enter a number'
        return
    }
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2)
    const totalAmount = (billAmount * parseFloat(tipAmount)).toFixed(2)

    resultDiv.textContent = `Tip Amount $${tipAmount} | Total Amount: $${totalAmount}`
})