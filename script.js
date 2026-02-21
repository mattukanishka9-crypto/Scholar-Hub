// script.js - SUCCESS POINT
// Fully responsive navbar with dropdowns & scroll effects

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const header = document.querySelector('header');

    // === 1. HAMBURGER MENU TOGGLE ===
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // === 2. CLOSE MENU ON LINK CLICK (Mobile) ===
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            // Close any open dropdowns
            dropdowns.forEach(d => d.classList.remove('active'));
        });
    });

    // === 3. DROPDOWN TOGGLE ON MOBILE (Click) ===
    dropdowns.forEach(dropdown => {
        const dropBtn = dropdown.querySelector('.drop-btn');

        dropBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // === 4. CLOSE DROPDOWNS WHEN CLICKING OUTSIDE ===
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // === 5. ADD SCROLLED CLASS TO HEADER ===
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === 6. PREVENT DROPDOWN LINK FROM CLOSING ON DESKTOP ===
    dropdowns.forEach(dropdown => {
        const dropBtn = dropdown.querySelector('.drop-btn');
        dropBtn.addEventListener('click', (e) => {
            if (window.innerWidth > 992) {
                e.preventDefault(); // Prevent page jump
            }
        });
    });
});

// Auto-sliding Reviews Carousel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.reviews-track');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const total = document.querySelectorAll('.review-card').length;

    const slide = () => {
        index = (index + 1) % total;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    // Auto-slide every 5 seconds
    let autoSlide = setInterval(slide, 5000);

    // Click dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, j) => d.classList.toggle('active', j === i));
            clearInterval(autoSlide);
            autoSlide = setInterval(slide, 5000);
        });
    });

    // Pause on hover
    document.querySelector('.reviews-slider').addEventListener('mouseenter', () => clearInterval(autoSlide));
    document.querySelector('.reviews-slider').addEventListener('mouseleave', () => autoSlide = setInterval(slide, 5000));
});


