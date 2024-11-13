document.addEventListener('DOMContentLoaded', function() {
    // Print functionality
    const printButton = document.getElementById('print-policy');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add current year to the last updated text if needed
    const lastUpdated = document.querySelector('.last-updated');
    if (lastUpdated) {
        const currentYear = new Date().getFullYear();
        lastUpdated.textContent = lastUpdated.textContent.replace(/\d{4}/, currentYear);
    }
}); 