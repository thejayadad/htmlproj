

const toggleButton = document.getElementById('toggle-btn')
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        toggleButton.textContent = "Switch To Light Mode"
    } else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        toggleButton.textContent = 'Switch To Dark Mode'
    }
})