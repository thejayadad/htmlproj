const images = [
    'https://via.placeholder.com/300x250/FF5733',
    'https://via.placeholder.com/300x250/33FF57',
    'https://via.placeholder.com/300x250/3357FF',
];

let currentIndex = 0;
const sliderContainer = document.getElementById('slider');
const nextButton = document.getElementById('next-btn');

function changeBackgroundImage() {
    sliderContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Change image on button click
nextButton.addEventListener('click', changeBackgroundImage);

// Initial background image
changeBackgroundImage();