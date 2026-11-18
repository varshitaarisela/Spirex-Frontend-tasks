
// Gallery Images
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
        caption: "Beautiful Nature"
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
        caption: "Peaceful Beach"
    },
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
        caption: "Mountain View"
    },
    {
        src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900",
        caption: "Sunrise Landscape"
    }
];

// Get HTML Elements
const galleryImage = document.getElementById("galleryImage");
const imageCaption = document.getElementById("imageCaption");
const imageNumber = document.getElementById("imageNumber");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const dotsContainer = document.getElementById("dotsContainer");

// Current Image Index
let currentIndex = 0;
let slideshowInterval = null;

// Create Navigation Dots
function createDots() {
    dotsContainer.innerHTML = "";

    images.forEach(function(image, index) {
        const dot = document.createElement("button");

        dot.classList.add("dot");
        dot.setAttribute("aria-label", "Show image " + (index + 1));

        dot.addEventListener("click", function() {
            stopSlideshow();
            currentIndex = index;
            displayImage();
        });

        dotsContainer.appendChild(dot);
    });
}

// Display Image Function
function displayImage() {
    galleryImage.style.opacity = 0;

    setTimeout(function() {
        galleryImage.src = images[currentIndex].src;
        galleryImage.alt = images[currentIndex].caption;

        imageCaption.innerText = images[currentIndex].caption;

        imageNumber.innerText =
            "Image " + (currentIndex + 1) + " of " + images.length;

        // Update Active Dot
        const dots = document.querySelectorAll(".dot");

        dots.forEach(function(dot, index) {
            dot.classList.remove("active");

            if (index === currentIndex) {
                dot.classList.add("active");
            }
        });

        galleryImage.style.opacity = 1;

    }, 200);
}

// Next Image Function
function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    displayImage();
}

// Previous Image Function
function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    displayImage();
}

// Next Button Event
nextBtn.addEventListener("click", function() {
    stopSlideshow();
    nextImage();
});

// Previous Button Event
prevBtn.addEventListener("click", function() {
    stopSlideshow();
    previousImage();
});

// Start Slideshow
function startSlideshow() {
    if (slideshowInterval !== null) {
        return;
    }

    slideshowInterval = setInterval(function() {
        nextImage();
    }, 3000);

    playPauseBtn.innerText = "⏸ Pause Slideshow";
}

// Stop Slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;

    playPauseBtn.innerText = "▶ Play Slideshow";
}

// Play/Pause Button Event
playPauseBtn.addEventListener("click", function() {
    if (slideshowInterval === null) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
});

// Initial Setup
createDots();
displayImage();
