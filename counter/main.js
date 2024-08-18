const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    
    // Count words by splitting the text by spaces
    const words = text.length === 0 ? 0 : text.split(/\s+/).length;
    
    // Count characters directly
    const characters = text.length;
    
    // Update the counts in the UI
    wordCount.textContent = words;
    charCount.textContent = characters;
});
