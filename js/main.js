// Navigation scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('blur');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isNavLinks = e.target.closest('.nav-links');
    const isNavToggle = e.target.closest('.nav-toggle');
    
    if (!isNavLinks && !isNavToggle && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('blur');
    }
});

// Experience tabs
const tabButtons = document.querySelectorAll('.tab-button');
const experienceItems = document.querySelectorAll('.experience-item');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const company = button.getAttribute('data-company');
        
        // Remove active class from all buttons and items
        tabButtons.forEach(btn => btn.classList.remove('active'));
        experienceItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked button and corresponding item
        button.classList.add('active');
        document.getElementById(company).classList.add('active');
    });
});

// Skills tabs toggle
const skillsTabButtons = document.querySelectorAll('.skills-tab-button');
const skillsPanels = document.querySelectorAll('.skills-panel');

skillsTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-skill');
        // clear active
        skillsTabButtons.forEach(b => b.classList.remove('active'));
        skillsPanels.forEach(p => p.classList.remove('active'));
        // set active
        btn.classList.add('active');
        const panel = document.getElementById(key);
        if (panel) panel.classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('blur');
        }
    });
});

// Glitch Text Effect
const glitchText = document.querySelector('.glitch-text');
let glitchInterval;
let isGlitching = false;

const startGlitch = () => {
    if (!glitchText || isGlitching) return;
    
    const originalText = glitchText.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    
    isGlitching = true;
    let iterations = 0;
    
    clearInterval(glitchInterval);
    
    glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
            isGlitching = false;
        }
        
        iterations += 1 / 3;
    }, 30);
};

// Add mouse interaction for glitch effect
if (glitchText) {
    const resetGlitch = () => {
        const originalText = "Arshmeen Kaur.";
        clearInterval(glitchInterval);
        glitchText.textContent = originalText;
        isGlitching = false;
    };

    glitchText.addEventListener('mouseenter', startGlitch);
    glitchText.addEventListener('mouseleave', resetGlitch);
    
    // Initial glitch on page load
    setTimeout(() => {
        startGlitch();
        setTimeout(resetGlitch, 1500);
    }, 1500);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Project hover effect
const projectImages = document.querySelectorAll('.project-image img');
projectImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.filter = 'none';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.filter = 'grayscale(100%) contrast(1) brightness(50%)';
    });
});

// Create staggered delay animation for sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
    section.style.transitionDelay = `${index * 0.1}s`;
});

// Animate sections when they come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Interactive Skills
const skills = document.querySelectorAll('.skills-list li');
skills.forEach(skill => {
    // Add tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.textContent = `Click to learn more about ${skill.textContent}`;
    skill.appendChild(tooltip);

    // Add click animation
    skill.addEventListener('click', () => {
        skill.style.transform = 'scale(0.95)';
        setTimeout(() => {
            skill.style.transform = 'translateY(-3px)';
        }, 100);
    });

    // Add hover effect
    skill.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(-10px)';
    });

    skill.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(0)';
    });
});

// Enhanced scroll animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.fade-in, .project-card, .experience-item, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Parallax effect for hero section
const heroSection = document.querySelector('.hero-section');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Interactive project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Enhanced glitch effect
const enhancedGlitch = () => {
    if (!glitchText) return;
    
    const originalText = glitchText.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    
    let iterations = 0;
    clearInterval(glitchInterval);
    
    glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
            setTimeout(enhancedGlitch, 3000); // Restart after 3 seconds
        }
        
        iterations += 1 / 3;
    }, 30);
};

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // Show initial experience tab
    document.querySelector('.tab-button').click();
    
    // Start hero animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
        
        // Trigger glitch effect
        setTimeout(startGlitch, 1500);
    }, 500);
    
    // Add focus states for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.classList.add('focused');
        });
        
        el.addEventListener('blur', () => {
            el.classList.remove('focused');
        });
    });
    
    // Add scroll animation listener
    window.addEventListener('scroll', scrollAnimations);
    
    // Start enhanced glitch effect
    setTimeout(enhancedGlitch, 1500);
    
    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skills-list li');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}); 

// Skills carousel controls and drag-to-scroll
(function initSkillsCarousel(){
    const track = document.querySelector('.skills-track');
    const prev = document.querySelector('.skills-nav.prev');
    const next = document.querySelector('.skills-nav.next');
    if (!track || !prev || !next) return;

    const cardWidth = () => track.querySelector('.skill-card')?.getBoundingClientRect().width || 300;
    const scrollByOne = (dir) => {
        track.scrollBy({ left: dir * (cardWidth() + 16), behavior: 'smooth' });
    };

    prev.addEventListener('click', () => scrollByOne(-1));
    next.addEventListener('click', () => scrollByOne(1));

    // Drag to scroll (desktop) / swipe (touch)
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e) => {
        isDown = true;
        track.classList.add('dragging');
        startX = (e.pageX || e.touches?.[0].pageX) - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    };

    const onMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches?.[0].pageX) - track.offsetLeft;
        const walk = (x - startX) * 1.2;
        track.scrollLeft = scrollLeft - walk;
    };

    const onUp = () => {
        isDown = false;
        track.classList.remove('dragging');
    };

    track.addEventListener('mousedown', onDown);
    track.addEventListener('mouseleave', onUp);
    track.addEventListener('mouseup', onUp);
    track.addEventListener('mousemove', onMove);

    track.addEventListener('touchstart', onDown, { passive: true });
    track.addEventListener('touchmove', onMove, { passive: false });
    track.addEventListener('touchend', onUp);

    // Keyboard arrows
    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') scrollByOne(1);
        if (e.key === 'ArrowLeft') scrollByOne(-1);
    });
})(); 