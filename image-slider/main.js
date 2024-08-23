const images = [
    'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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