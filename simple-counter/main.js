const counter = document.getElementById('counter')
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
let count = 0;
incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count
})
decrementButton.addEventListener('click', () => {
    count--;
    counter.textContent = count
})