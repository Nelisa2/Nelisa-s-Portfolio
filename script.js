const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields before sending.";
            formMessage.className = "error";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been submitted.";
        formMessage.className = "success";
        contactForm.reset();
    });

}


const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeButton) {

    welcomeButton.addEventListener("click", function() {

        welcomeMessage.textContent = "Welcome to Nelisa's Portfolio!";

        setTimeout(function() {
            window.location.href = "aboutme.html";
        }, 1500);

    });

}