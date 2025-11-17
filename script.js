// ============================================
// PROJECTS DATA
// Add your projects here - easy to update!
// ============================================
const projects = [
    {
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform with shopping cart, payment integration, and user authentication.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/project1",
        live: "https://yourproject1.com",
        icon: "🛒"
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com/yourusername/project2",
        live: "https://yourproject2.com",
        icon: "✓"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather application with location-based forecasts, beautiful UI, and detailed weather metrics.",
        tags: ["JavaScript", "API", "CSS Grid"],
        github: "https://github.com/yourusername/project3",
        live: "https://yourproject3.com",
        icon: "🌤"
    },
    {
        title: "Portfolio CMS",
        description: "Content management system for photographers and artists to showcase their work with beautiful galleries.",
        tags: ["Next.js", "PostgreSQL", "AWS"],
        github: "https://github.com/yourusername/project4",
        live: "https://yourproject4.com",
        icon: "📸"
    }
    // Add more projects here following the same format
];

// ============================================
// SKILLS DATA
// Add your skills here - easy to update!
// ============================================
const skills = [
    {
        category: "Frontend Development",
        items: [
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Vue.js", level: 80 },
            { name: "Tailwind CSS", level: 90 }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "PHP", level: 75 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 80 }
        ]
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git/GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Figma", level: 85 },
            { name: "REST APIs", level: 90 }
        ]
    }
    // Add more skill categories here following the same format
];

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.live}" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// RENDER SKILLS
// ============================================
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    skills.forEach((category, index) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        skillCategory.style.animationDelay = `${index * 0.1}s`;
        
        const skillItemsHTML = category.items.map(skill => `
            <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 0%" data-progress="${skill.level}"></div>
                </div>
                <span class="skill-level">${skill.level}%</span>
            </div>
        `).join('');
        
        skillCategory.innerHTML = `
            <h3>${category.category}</h3>
            <div class="skill-list">
                ${skillItemsHTML}
            </div>
        `;
        
        skillsContainer.appendChild(skillCategory);
    });
}

// ============================================
// ANIMATE SKILL BARS ON SCROLL
// ============================================
function animateSkillBars() {
    const skillSection = document.getElementById('skills');
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        const progress = item.querySelector('.skill-progress');
                        const targetWidth = progress.getAttribute('data-progress');
                        progress.style.width = targetWidth + '%';
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillSection);
}

// ============================================
// ANIMATE ELEMENTS ON SCROLL
// ============================================
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you can add your form submission logic
    // For example: send to your backend, use EmailJS, etc.
    console.log('Form submitted:', formData);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    animateSkillBars();
    animateOnScroll();
});

// ============================================
// TYPING EFFECT FOR HOME SECTION (OPTIONAL)
// ============================================
function typingEffect() {
    const titles = [
        "Full Stack Developer",
        "Frontend Specialist",
        "UI/UX Enthusiast",
        "Problem Solver"
    ];
    
    const titleElement = document.querySelector('.home-text h2');
    if (!titleElement) return;
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            titleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }
    
    // Uncomment the line below to enable typing effect
    // type();
}

typingEffect();