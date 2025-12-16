document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior (jumping directly)
            e.preventDefault();
            
            // Get the target section ID from the href attribute (e.g., #legacy)
            const targetId = this.getAttribute('href');
            
            // Find the target element
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate the position to scroll to
                // We subtract the height of the fixed header/navbar for perfect alignment
                const headerHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Perform the smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add an effect for the fixed header on scroll
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(30, 30, 30, 0.95)'; // Slight transparency when scrolling
        } else {
            header.style.backgroundColor = 'var(--dark-background)'; // Full opacity at the top
        }
    });
});