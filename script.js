

//for contact session to Emailjs
(function () {
    emailjs.init("4O6qVZkHbQU6myHU-"); // EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_qj3b3vl", "template_46k9avv", this)
            .then(function (response) {
                statusMessage.innerText = "Your message is submitted Successfully...";
                statusMessage.style.color = "green";
                form.reset();
                console.log('SUCCESS...!', response.status, response.text);
            }, function (error) {
                statusMessage.innerText = "Failed to send message. Please try again.";
                statusMessage.style.color = "red";
                console.error('FAILED...', error);
            });
    });
});




//responsible for menubar
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

