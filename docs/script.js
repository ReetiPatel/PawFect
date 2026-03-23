// Simple JavaScript for Contact Form

var form = document.getElementById('contactForm');

if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    };
}
