// =======================================================
// === A SINGLE, OPTIMIZED SCRIPT FOR ALL FUNCTIONALITY ===
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
    // Select all necessary elements once at the top
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('.header'); // Select the header element
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // ===================================================
    // === 1. Mobile Menu Toggle Logic (CLICK EVENT) ===
    // ===================================================
    // Use an event listener for the menu icon to toggle the mobile menu
    menuIcon.addEventListener('click', () => {
        // Toggle the icon and the navbar's active state
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Optional: Close menu when clicking a link
    navLinks.forEach(link => {
        link.onclick = () => {
            // Remove the active classes to close the menu
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        };
    });

    // ======================================================
    // === 2. Scroll-based Functionality (SCROLL EVENT) ===
    // ======================================================
    // Single scroll event handler for all scroll-related tasks
    window.onscroll = () => {
        let top = window.scrollY;

        // Task A: Highlight active navigation link based on scroll position
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150; // Use an offset to trigger the change earlier
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Add 'active' class to the corresponding link
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        // Task B: Add 'scrolled' class to the header for a fixed background/shadow effect
        if (top > 50) { // Add class after a slight scroll
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
});
