document.addEventListener('DOMContentLoaded', () => {
    // --- Authentication ---
    const loginContainer = document.getElementById('login-container');
    const adminDashboard = document.getElementById('admin-dashboard');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');

    // Check stored session
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        showDashboard();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = usernameInput.value;
        const pass = passwordInput.value;

        // Simple hardcoded check
        if (user === 'admin' && pass === 'password123') {
            localStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            loginError.textContent = 'Invalid credentials';
            loginForm.reset();
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('adminLoggedIn');
        location.reload();
    });

    function showDashboard() {
        loginContainer.style.opacity = '0';
        setTimeout(() => {
            loginContainer.style.display = 'none';
            adminDashboard.style.display = 'flex';
            loadData(); // Load current data into inputs
        }, 300);
    }


    // --- Dashboard Tabs ---
    const tabItems = document.querySelectorAll('.sidebar li');
    const sections = document.querySelectorAll('.editor-section');

    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabItems.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active to click
            tab.classList.add('active');

            // Show section
            const targetId = tab.getAttribute('data-tab') + '-editor';
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- Data Management (Saving/Loading) ---
    // Keys used in LocalStorage: 'portfolioData'

    // Inputs
    const inputs = {
        // Hero
        name: document.getElementById('edit-name'),
        roles: document.getElementById('edit-roles'),
        heroDesc: document.getElementById('edit-hero-desc'),
        // About
        aboutTitle: document.getElementById('edit-about-title'),
        aboutDesc: document.getElementById('edit-about-desc'),
        age: document.getElementById('edit-age'),
        email: document.getElementById('edit-email'),
        location: document.getElementById('edit-location')
    };

    // --- Data Management ---
    let currentData = {
        hero: {},
        about: {},
        services: [],
        journey: [],
        skills: [],
        contact: {}
    };

    function loadData() {
        const stored = localStorage.getItem('portfolioData');
        if (stored) {
            currentData = JSON.parse(stored);
        } else {
            // Default/Initial Data could go here if needed
        }

        // Populate Static Inputs
        if (currentData.hero) {
            inputs.name.value = currentData.hero.name || '';
            inputs.roles.value = currentData.hero.roles || '';
            inputs.heroDesc.value = currentData.hero.desc || '';
        }
        if (currentData.about) {
            inputs.aboutTitle.value = currentData.about.title || '';
            inputs.aboutDesc.value = currentData.about.desc || '';
            inputs.age.value = currentData.about.age || '';
            inputs.email.value = currentData.about.email || '';
            inputs.location.value = currentData.about.location || '';
        }
        if (currentData.contact) {
            document.getElementById('edit-contact-email').value = currentData.contact.email || '';
            document.getElementById('edit-contact-phone').value = currentData.contact.phone || '';
            document.getElementById('edit-contact-address').value = currentData.contact.address || '';
        }

        // Render Lists
        renderServices();
        renderJourney();
        renderSkills();
    }

    // --- Render Functions ---
    window.renderServices = function () {
        const list = document.getElementById('services-list');
        list.innerHTML = '';
        (currentData.services || []).forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <h4>Service #${index + 1}</h4>
                <div class="form-group"><input type="text" placeholder="Icon Class (fas fa-code)" class="svc-icon" value="${item.icon || ''}"></div>
                <div class="form-group"><input type="text" placeholder="Title" class="svc-title" value="${item.title || ''}"></div>
                <div class="form-group"><textarea placeholder="Description" class="svc-desc" rows="2">${item.desc || ''}</textarea></div>
                <button class="remove-btn" onclick="removeService(${index})">Remove</button>
            `;
            list.appendChild(div);
        });
    }

    window.renderJourney = function () {
        const list = document.getElementById('journey-list');
        list.innerHTML = '';
        (currentData.journey || []).forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <h4>Journey Item #${index + 1}</h4>
                <div class="form-group"><input type="text" placeholder="Year (2020 - 2021)" class="j-year" value="${item.year || ''}"></div>
                <div class="form-group"><input type="text" placeholder="Title / Degree" class="j-title" value="${item.title || ''}"></div>
                <div class="form-group"><textarea placeholder="Description" class="j-desc" rows="2">${item.desc || ''}</textarea></div>
                <button class="remove-btn" onclick="removeJourney(${index})">Remove</button>
            `;
            list.appendChild(div);
        });
    }

    window.renderSkills = function () {
        const list = document.getElementById('skills-list');
        list.innerHTML = '';
        (currentData.skills || []).forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <h4>Skill #${index + 1}</h4>
                <div class="split-inputs">
                    <input type="text" placeholder="Skill Name (HTML)" class="sk-name" value="${item.name || ''}">
                    <input type="number" placeholder="%" class="sk-pct" value="${item.percentage || ''}">
                </div>
                <button class="remove-btn" onclick="removeSkill(${index})">Remove</button>
            `;
            list.appendChild(div);
        });
    }

    // --- Add/Remove Handlers ---
    // Note: We must save current input state to array before re-rendering!
    // Or simpler: Read DOM to update Array, then Modify Array, then Re-render.

    function syncArraysFromDOM() {
        // Services
        currentData.services = [];
        document.querySelectorAll('#services-list .list-item').forEach(el => {
            currentData.services.push({
                icon: el.querySelector('.svc-icon').value,
                title: el.querySelector('.svc-title').value,
                desc: el.querySelector('.svc-desc').value
            });
        });

        // Journey
        currentData.journey = [];
        document.querySelectorAll('#journey-list .list-item').forEach(el => {
            currentData.journey.push({
                year: el.querySelector('.j-year').value,
                title: el.querySelector('.j-title').value,
                desc: el.querySelector('.j-desc').value
            });
        });

        // Skills
        currentData.skills = [];
        document.querySelectorAll('#skills-list .list-item').forEach(el => {
            currentData.skills.push({
                name: el.querySelector('.sk-name').value,
                percentage: el.querySelector('.sk-pct').value
            });
        });
    }

    window.addServiceItem = function () {
        syncArraysFromDOM();
        currentData.services.push({ icon: 'fas fa-code', title: 'New Service', desc: '' });
        renderServices();
    }
    window.removeService = function (index) {
        syncArraysFromDOM();
        currentData.services.splice(index, 1);
        renderServices();
    }

    window.addJourneyItem = function () {
        syncArraysFromDOM();
        currentData.journey.push({ year: '2023', title: 'New Job', desc: '' });
        renderJourney();
    }
    window.removeJourney = function (index) {
        syncArraysFromDOM();
        currentData.journey.splice(index, 1);
        renderJourney();
    }

    window.addSkillItem = function () {
        syncArraysFromDOM();
        currentData.skills.push({ name: 'New Skill', percentage: '50' });
        renderSkills();
    }
    window.removeSkill = function (index) {
        syncArraysFromDOM();
        currentData.skills.splice(index, 1);
        renderSkills();
    }


    // --- SAVE ---
    const saveBtn = document.getElementById('save-changes-btn');
    saveBtn.addEventListener('click', () => {
        // 1. Get Static Inputs
        currentData.hero = {
            name: inputs.name.value,
            roles: inputs.roles.value,
            desc: inputs.heroDesc.value
        };
        currentData.about = {
            title: inputs.aboutTitle.value,
            desc: inputs.aboutDesc.value,
            age: inputs.age.value,
            email: inputs.email.value,
            location: inputs.location.value
        };
        currentData.contact = {
            email: document.getElementById('edit-contact-email').value,
            phone: document.getElementById('edit-contact-phone').value,
            address: document.getElementById('edit-contact-address').value
        };

        // 2. Get Dynamic Lists (Sync from DOM)
        syncArraysFromDOM();

        // 3. Save
        localStorage.setItem('portfolioData', JSON.stringify(currentData));
        alert('Changes Saved! Go to the home page to see them.');
    });

});
