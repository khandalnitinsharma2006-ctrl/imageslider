
let images = [
    "images/evan-sanchez-xsm6EJM1mP4-unsplash.jpg",
    "images/k-mitch-hodge-oQ9pECond48-unsplash.jpg",
    "images/alex-ramon-20cqyygGQxA-unsplash.jpg",
    "images/kseniia-jin-FBVtdQB6i9g-unsplash.jpg"
];

let currentIndex = 0;

let slider = document.getElementById("sliderImage");

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }

    slider.src = images[currentIndex];
}
