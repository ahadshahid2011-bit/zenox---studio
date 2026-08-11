/* ==========================================================================
   1. AUTHENTICATION & MODAL CONTROLS
   ========================================================================== */
let userIsAuthenticated = false;

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('active');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('active');
}

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

function handleInteraction() {
    if (!userIsAuthenticated) {
        openLoginModal();
    } else {
        proceedToWhatsApp();
    }
}

function proceedToWhatsApp() {
    const secureWhatsAppURL = `https://wa.me/923111282552`;
    window.open(secureWhatsAppURL, '_blank');
}


/* ==========================================================================
   2. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('show-menu');
    });

    // Close menu automatically when clicking any nav link on mobile
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('show-menu');
        });
    });
}


/* ==========================================================================
   3. DYNAMIC HEADER SCROLL SPY & NAVIGATION HIGHLIGHTING
   ========================================================================== */
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
        const hrefAttr = link.getAttribute('href');
        if (hrefAttr && hrefAttr.includes(currentActiveSectionId)) {
            link.classList.add('active');
        }
    });
});
