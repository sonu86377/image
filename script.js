const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];
 let currentIndex = 0;

 function changeImage(direction){
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('currentImage').src = images[currentIndex];
 }