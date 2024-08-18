const optionsArray = ["Jace", "Jazz", "Jada", "Jax"];

const dropdown = document.getElementById('item')

optionsArray.forEach(optionText => {
    const optionElement = document.createElement('option')
    optionElement.textContent = optionText;
    dropdown.appendChild(optionElement)
})