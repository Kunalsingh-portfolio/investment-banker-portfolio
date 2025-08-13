/*
 * Main JavaScript file for Kunal Singh's portfolio website.
 *
 * This script handles two key functions:
 *  1. Updates the copyright year in the footer dynamically.
 *  2. Toggles the mobile navigation drawer on small screens.
 */

// Execute after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Dynamically insert the current year into the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Handle mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('change', function () {
            navLinks.classList.toggle('open', navToggle.checked);
        });
    }
});