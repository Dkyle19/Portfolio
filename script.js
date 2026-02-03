/* Toggle Icon Navbar */
let menuIcon = document.querySelector('.menu-btn');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    // Toggle icon style if using FontAwesome classes for close/hamburger
    menuIcon.querySelector('i').classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // keeping for reference but not used in logic below directly as currently written, but let's fix the logic inside the scroll too

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove active from all links
            document.querySelectorAll('.nav-links a').forEach(links => {
                links.classList.remove('active');
                // Add active to current
                if (links.getAttribute('href') == '#' + id) {
                    links.classList.add('active');
                }
            });
        }
    });

    /* Sticky Navbar */
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    if (navbar.classList.contains('active')) {
        menuIcon.querySelector('i').classList.remove('fa-times');
        navbar.classList.remove('active');
    }
};

/* Data Loading & Typing Animation */
const typingText = document.querySelector('.typing-text');
let words = ["Frontend Developer", "Web Designer", "Creative Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function loadContent() {
    const storedData = JSON.parse(localStorage.getItem('portfolioData')) || {};

    // --- Hero ---
    if (storedData.hero) {
        if (storedData.hero.name) document.getElementById('hero-name').textContent = storedData.hero.name;
        if (storedData.hero.desc) document.getElementById('hero-desc').textContent = storedData.hero.desc;
        if (storedData.hero.roles) {
            words = storedData.hero.roles.split(',').map(r => r.trim());
        }
    }

    // --- About ---
    if (storedData.about) {
        if (storedData.about.title) document.getElementById('about-title').textContent = storedData.about.title;
        if (storedData.about.desc) document.getElementById('about-desc').textContent = storedData.about.desc;
        if (storedData.about.age) document.getElementById('about-age-val').textContent = storedData.about.age;
        if (storedData.about.email) document.getElementById('about-email-val').textContent = storedData.about.email;
        if (storedData.about.location) document.getElementById('about-loc-val').textContent = storedData.about.location;
    }

    // --- Services ---
    if (storedData.services && storedData.services.length > 0) {
        const servicesGrid = document.getElementById('services-grid');
        servicesGrid.innerHTML = ''; // Clear static content
        storedData.services.forEach(item => {
            const div = document.createElement('div');
            div.className = 'service-card';
            div.style.cssText = 'padding: 1.5rem; border: 1px solid var(--bg-color); background: var(--bg-color); border-radius: 2rem; text-align: center; transition: .5s ease;';
            // Note: Inline styles are backup, classes should handle most. 
            // but for safety mimicking the updated card style:
            div.innerHTML = `
                <i class="${item.icon}" style="font-size: 2rem; margin-bottom: .5rem; color: var(--main-color);"></i>
                <h3 style="font-size: 1.4rem; margin-bottom: .5rem;">${item.title}</h3>
                <p style="font-size: 1.1rem;">${item.desc}</p>
            `;
            servicesGrid.appendChild(div);
        });
    }

    // --- Journey ---
    if (storedData.journey && storedData.journey.length > 0) {
        const timelineGrid = document.getElementById('timeline-grid');
        timelineGrid.innerHTML = '';
        // Create a single column for dynamic items
        const column = document.createElement('div');
        column.className = 'timeline-column';
        column.innerHTML = '<h3 style="font-size: 1.8rem; margin-bottom: 1rem;"><i class="fas fa-history"></i> Experience & Education</h3>';

        storedData.journey.forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.style.cssText = 'padding: 1.5rem; background: var(--bg-color); border-radius: 1rem; border-left: .5rem solid var(--main-color); margin-bottom: 2rem; position: relative; box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);';
            div.innerHTML = `
                <div class="timeline-date" style="font-size: 1.2rem; color: var(--main-color); margin-bottom: 1rem;">${item.year}</div>
                <h4 style="font-size: 1.5rem; margin-bottom: .5rem;">${item.title}</h4>
                <p style="font-size: 1.3rem;">${item.desc}</p>
            `;
            column.appendChild(div);
        });
        timelineGrid.appendChild(column);
    }

    // --- Skills ---
    if (storedData.skills && storedData.skills.length > 0) {
        const skillsWrapper = document.getElementById('skills-wrapper');
        skillsWrapper.innerHTML = '';
        storedData.skills.forEach(item => {
            const div = document.createElement('div');
            div.className = 'skill-box';
            div.innerHTML = `
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem; display: flex; justify-content: space-between;">${item.name} <span>${item.percentage}%</span></h3>
                <div class="progress-bar" style="height: .6rem; background: var(--bg-color); border-radius: 1rem; overflow: hidden;">
                    <span style="display: block; height: 100%; background: var(--main-color); border-radius: 1rem; width: ${item.percentage}%;"></span>
                </div>
            `;
            skillsWrapper.appendChild(div);
        });
    }

    // --- Contact ---
    if (storedData.contact) {
        if (storedData.contact.email) document.getElementById('contact-email').textContent = storedData.contact.email;
        if (storedData.contact.phone) document.getElementById('contact-phone').textContent = storedData.contact.phone;
        if (storedData.contact.address) document.getElementById('contact-address').textContent = storedData.contact.address;
    }
}

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    }

    const speed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    if (typingText) typeEffect();
});

/* Image Upload Logic */
const imgPlaceholder = document.getElementById('hero-img-placeholder');
const fileInput = document.getElementById('hero-pic-upload');

if (imgPlaceholder && fileInput) {
    imgPlaceholder.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                // Clear the icon and any existing content
                imgPlaceholder.innerHTML = '';

                // Create and append the image
                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = 'Uploaded Profile Picture';
                imgPlaceholder.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

