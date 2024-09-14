const images = [
    'C:/Users/User/Desktop/AllTheBest/Home/foto/Group1.jpg',
    'C:/Users/User/Desktop/AllTheBest/Home/foto/Group2.jpg',
    'C:/Users/User/Desktop/AllTheBest/Home/foto/чехол Iphone 13.jpg'
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    mainImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

