
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simulate sending email (replace with actual email service)
            setTimeout(() => {
                // Hide any existing messages
                successMessage.classList.add('d-none');
                errorMessage.classList.add('d-none');
                
                // Show success message (in real implementation, check if email was sent successfully)
                successMessage.classList.remove('d-none');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('d-none');
                }, 5000);
            }, 1000);
        });
    }
    
    // Newsletter subscription
    const newsletterForms = document.querySelectorAll('form:has(input[type="email"][placeholder*="email"])');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
        });
    });
});
