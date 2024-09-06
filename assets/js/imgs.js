document.querySelectorAll('.slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let currentImageIndex = 0;
  const totalImages = images.length;

  function showImage(index) {
    // Hide all images
    images.forEach(img => img.classList.remove('active'));

    // Show the current image
    images[index].classList.add('active');
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
  }

  // Initialize first image
  showImage(currentImageIndex);

  // Change image every 2 seconds
  setInterval(nextImage, 2000);
});



