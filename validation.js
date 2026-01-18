// Contact Form Validation
function validateContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Get form fields
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const phone = form.querySelector('input[name="phone"]');
        const message = form.querySelector('textarea[name="message"]');
        const submitBtn = form.querySelector('button[type="submit"]');

        // Reset previous errors
        resetErrors(form);

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate phone (optional but if provided should be valid)
        if (phone.value.trim() && !isValidPhone(phone.value.trim())) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message should be at least 10 characters');
            isValid = false;
        }

        // If form is valid, submit it
        if (isValid) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // In a real implementation, you would send the form data to your server
            setTimeout(() => {
                alert('Thank you for your message. We will get back to you soon.');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 1500);
        }
    });

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
        } else {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            formGroup.appendChild(error);
        }
    }

    function resetErrors(form) {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        const errorGroups = form.querySelectorAll('.form-group.error');
        errorGroups.forEach(group => group.classList.remove('error'));
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone);
    }
}

// Initialise validation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    validateContactForm();
});
