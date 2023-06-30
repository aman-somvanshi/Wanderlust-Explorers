// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showAboutUs() {
    const aboutSection = document.getElementById("about-us");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }



// Image slideshow
const slideshowImages = document.querySelectorAll('.slideshow-img');
const nextImageDelay = 3000;
let currentImageCounter = 0;

// Display the first image
slideshowImages[currentImageCounter].style.opacity = 1;

// Loop through the images
setInterval(nextImage, nextImageDelay);

function nextImage() {
  // Reset the opacity of the current image
  slideshowImages[currentImageCounter].style.opacity = 0;

  // Increment the counter
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  // Display the next image
  slideshowImages[currentImageCounter].style.opacity = 1;
}

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Perform form validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Send the form data to the server (you would need a backend for this)
  console.log('Form submitted:', name, email, message);

  // Reset the form fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('Thank you for your message!');
});
