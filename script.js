// navbar section script 

// Simulate a login state (for demo purpose)
let isLoggedIn = false;

// Elements
const userProfileSection = document.getElementById('userProfileSection');
const signInButton = document.getElementById('signInButton');
const signInModal = new bootstrap.Modal(document.getElementById('signInModal'));
const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));

// Check login state
function updateUI() {
  if (isLoggedIn) {
    userProfileSection.classList.remove('d-none');
    signInButton.classList.add('d-none');
  } else {
    userProfileSection.classList.add('d-none');
    signInButton.classList.remove('d-none');
  }
}

// Show sign in form on button click
signInButton.addEventListener('click', function () {
  signInModal.show();
});

// Handle form submission and login
document.getElementById('signInForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Here you'd normally check credentials via an API, but we'll simulate login
  isLoggedIn = true;
  signInModal.hide();
  updateUI();
});

// Show profile modal
document.getElementById('profileLink').addEventListener('click', function () {
  profileModal.show();
});

// Handle logout
document.getElementById('logoutButton').addEventListener('click', function () {
  isLoggedIn = false;
  updateUI();
});



// counter section 

document.addEventListener('DOMContentLoaded', () => {
  // Function to update the counter
  const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const speed = 200; // Speed of counting animation

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => updateCounter(counter), 20);
    } else {
      counter.innerText = target;
    }
  };

  // Set up Intersection Observer to trigger animations
  const counters = document.querySelectorAll('.counter');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust as needed
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!counter.classList.contains('counting')) {
          counter.classList.add('counting');
          updateCounter(counter);
        }
        observer.unobserve(counter);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});



// project section 


document.getElementById('projectImage').addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function () {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = reader.result;
    imagePreview.style.display = 'block';
  };
  reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('addProjectForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const projectName = document.getElementById('projectName').value;
  const projectImage = document.getElementById('projectImage').files[0];
  const projectDescription = document.getElementById('projectDescription').value;
  const feedbackMessage = document.getElementById('feedbackMessage');

  if (!projectName || !projectImage || !projectDescription) {
    feedbackMessage.innerHTML = 'All fields are required!';
    feedbackMessage.classList.add('error');
    return;
  }

  // Add project logic here

  feedbackMessage.innerHTML = 'Project added successfully!';
  feedbackMessage.classList.remove('error');
  feedbackMessage.classList.add('success');

  // Clear form and image preview
  document.getElementById('addProjectForm').reset();
  document.getElementById('imagePreview').style.display = 'none';

  // Close modal
  $('#addProjectModal').modal('hide');
});

// service section 

document.addEventListener('DOMContentLoaded', function () {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.classList.add('fade-in');
  });
});


// about section 


// Rotating Skills Display
const skills = ["Programming", "Designing", "Data Analysis", "SEO Optimization", "Graphics Design"];
let skillIndex = 0;

function rotateSkills() {
  const skillTextElement = document.getElementById("skill-text");
  skillTextElement.textContent = skills[skillIndex];
  skillIndex = (skillIndex + 1) % skills.length;
}

setInterval(rotateSkills, 1000); // Change skill every 1 second

// Profile Popup Functionality
document.getElementById('profile-btn').addEventListener('click', function () {
  var profilePopup = new bootstrap.Modal(document.getElementById('profile-popup'));
  profilePopup.show();
});




// Contact Form Validation and Submit
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  // Simulate successful submission
  alert("Thank you, " + name + "! Your message has been sent.");

  // Optionally, clear the form after submission
  document.getElementById('contact-form').reset();
});



// Bootstrap Tab functionality (default enabled)
var triggerTabList = [].slice.call(document.querySelectorAll('#myTabs a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
});

// resume 

document.getElementById('applyResumeBtn').addEventListener('click', function () {
  var myModal = new bootstrap.Modal(document.getElementById('resumeModal'));
  myModal.show();
});

document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;

  // Create resume template HTML
  const resumeHTML = `
    <div class="row">
      <div class="col-md-4">
        <img src="profile-picture.jpg" alt="Profile Picture" class="img-fluid rounded-circle mb-4" style="border-radius: 10px;">
      </div>
      <div class="col-md-8">
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Links</h3>
        <p><a href="${linkedin}">LinkedIn</a></p>
        <p><a href="${github}">GitHub</a></p>
      </div>
    </div>
  `;

  // Insert resume HTML into the resume template modal
  document.getElementById('resumeTemplate').innerHTML = resumeHTML;

  // Show resume template modal
  var resumeModal = new bootstrap.Modal(document.getElementById('resumeTemplateModal'));
  resumeModal.show();
});



// footer 
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value;

  // Here, you would typically send the email to your server for processing.
  // For demo purposes, we'll just log it and show an alert.

  console.log(`Subscribed: ${email}`);
  alert('Thank you for subscribing!');

  // Optionally, you can reset the form after submission
  e.target.reset();
});
