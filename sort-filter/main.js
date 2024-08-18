document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const numbersArray = input.split(',').map(Number);

    const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
    oddNumbers.sort((a, b) => a - b);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Filtered and Sorted Odd Numbers: ${oddNumbers.join(', ')}</p>`;
});
