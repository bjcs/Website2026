/**
 * BJCS Website JavaScript
 * Simple functionality for contact form and smooth interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
         const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual endpoint)
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // TODO: Replace with actual form submission
            console.log('Form data:', data);
        });
    }

    // Notification function
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
  notification.innerHTML = `
  <span class="notification-text">${message}</span>
     <button class="notification-close"&times;</button>
        `;
        
  // Add styles
        notification.style.cssText = `
     position: fixed;
            bottom: 20px;
     right: 20px;
         padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
      color: white;
   border-radius: 8px;
   display: flex;
     align-items: center;
 gap: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
  `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
     @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
         to { transform: translateX(0); opacity: 1; }
   }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Close button
      const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;';
    closeBtn.addEventListener('click', () => notification.remove());
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
  setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Header scroll effect
    const header = document.querySelector('.header');
  let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
   header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      } else {
header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
});

    // Lazy load images (placeholder for future)
const images = document.querySelectorAll('img[data-src]');
    
const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
    if (entry.isIntersecting) {
        const img = entry.target;
       img.src = img.dataset.src;
   img.removeAttribute('data-src');
       observer.unobserve(img);
  }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    console.log('BJCS website loaded successfully!');
});
