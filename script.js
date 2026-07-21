// Authentication Status Tracker
let userIsAuthenticated = false;

// Modal UI Control Functions
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

// Check Input Validation and Log User In
function executeMockLogin() {
    const emailInput = document.getElementById('userEmail').value;
    const passInput = document.getElementById('userPass').value;

    if (emailInput.trim() === "" || passInput.trim() === "") {
        alert("Please fill out all credentials to enter safely.");
        return;
    }

    userIsAuthenticated = true;
    closeLoginModal();
    
    // Auto trigger redirection after login success
    proceedToWhatsApp();
}

// Check if user is logged in before allowing contact
function handleInteraction() {
    if (!userIsAuthenticated) {
        openLoginModal();
    } else {
        proceedToWhatsApp();
    }
}

// Redirect with a completely empty pre-filled text area
function proceedToWhatsApp() {
    // Is link mein koi text parameter nahi hai, isliye chat box bilkul blank khulega
    const secureWhatsAppURL = `https://wa.me/923111282552`;
    window.open(secureWhatsAppURL, '_blank');
}

// Dynamic Header Navigation Highlighting Rule
const activeSections = document.querySelectorAll('section');
const activeLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let currentActiveSectionId = '';
    activeSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 250)) {
            currentActiveSectionId = section.getAttribute('id');
        }
    });

    activeLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentActiveSectionId)) {
            link.classList.add('active');
        }
    });
});
// Toggle mobile menu visibility on click
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
});