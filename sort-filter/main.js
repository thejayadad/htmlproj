document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const numbersArray = input.split(',').map(Number)
    const oddnumbers = numbersArray.filter(num => num %2 !==0)
    oddnumbers.sort((a,b) => a - b)
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `<p>filtered and Sorted Odd Numbers: ${oddnumbers.join(', ')}</p>` 
})