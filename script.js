// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('GPOI Example Project loaded successfully!');
    
    // Interactive button functionality
    const interactiveBtn = document.getElementById('interactive-btn');
    const message = document.getElementById('message');
    let clickCount = 0;
    
    if (interactiveBtn && message) {
        interactiveBtn.addEventListener('click', function() {
            clickCount++;
            message.classList.remove('hidden');
            
            const messages = [
                'Hello! This demonstrates JavaScript interactivity.',
                'Great! You clicked the button again.',
                'Excellent! JavaScript is working perfectly.',
                'Amazing! This shows dynamic content updates.',
                'Fantastic! You\'re exploring the interactive features.'
            ];
            
            const randomMessage = messages[Math.min(clickCount - 1, messages.length - 1)];
            message.textContent = randomMessage;
            
            // Add a simple animation effect
            message.style.transform = 'scale(0.8)';
            message.style.opacity = '0';
            
            setTimeout(() => {
                message.style.transform = 'scale(1)';
                message.style.opacity = '1';
            }, 100);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without triggering page reload
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const messageText = formData.get('message').trim();
            
            // Basic validation
            if (!name || !email || !messageText) {
                showFormResponse('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormResponse('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (in real application, this would send to server)
            showFormResponse('Processing your message...', 'success');
            
            setTimeout(() => {
                showFormResponse(
                    `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`,
                    'success'
                );
                
                // Reset form
                contactForm.reset();
            }, 1500);
        });
    }
    
    // Function to show form response messages
    function showFormResponse(message, type) {
        formResponse.textContent = message;
        formResponse.className = `form-response ${type}`;
        formResponse.classList.remove('hidden');
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formResponse.classList.add('hidden');
            }, 5000);
        }
    }
    
    // Add parallax effect to sections on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const sections = document.querySelectorAll('.section');
        
        sections.forEach((section, index) => {
            const rate = scrolled * -0.5;
            section.style.transform = `translate3d(0, ${rate * 0.1 * (index + 1)}px, 0)`;
        });
    });
    
    // Add entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for entrance animations
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Console welcome message for developers
    console.log('%c Welcome to GPOI Example Project! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px; border-radius: 5px; font-size: 16px;');
    console.log('This project demonstrates basic web technologies:');
    console.log('- HTML5 for semantic structure');
    console.log('- CSS3 for modern styling and animations');
    console.log('- JavaScript for interactive functionality');
    console.log('Feel free to explore the code and learn!');
});