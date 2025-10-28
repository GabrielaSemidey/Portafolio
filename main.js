/* ================================
   MAIN.JS - JavaScript profesional y limpio
   Portfolio Gabriela Ojeda Semidey
   ================================ */

'use strict';

// ================================
// 1. ELEMENTOS GLOBALES
// ================================
const header = document.getElementById('header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const projectHero = document.querySelector('.project-hero');
const projectBanner = projectHero ? projectHero.querySelector('.project-hero__banner') : null;

let lastScroll = 0;
let ticking = false;

// ================================
// 2. SCROLL HANDLER CONSOLIDADO
// ================================
function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Header scroll effect
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (currentScroll >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Parallax effect (solo si existe hero con banner)
    if (projectHero && projectBanner) {
        const heroHeight = projectHero.offsetHeight;
        
        if (currentScroll < heroHeight) {
            projectBanner.style.transform = `scale(1.1) translateY(${currentScroll * 0.3}px)`;
            
            if (currentScroll > 50) {
                projectHero.classList.add('scrolled');
            } else {
                projectHero.classList.remove('scrolled');
            }
        }
    }
    
    lastScroll = currentScroll;
    ticking = false;
}

// Listener de scroll optimizado
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

// ================================
// 3. SMOOTH SCROLL PARA NAVEGACIÓN
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// 4. SCROLL REVEAL ANIMATIONS
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    const heroAnimations = document.querySelectorAll('.hero .animate-fadeInUp');
    heroAnimations.forEach(el => {
        el.style.opacity = '0';
        el.style.animation = `fadeInUp 0.6s ease forwards`;
    });
});

// ================================
// 5. FILTROS DE PROYECTOS
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-category]');
    
    if (filterButtons.length === 0 || projectCards.length === 0) {
        return;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

// ================================
// 6. MOBILE MENU
// ================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

// ================================
// 7. EXTERNAL LINKS
// ================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ================================
// 8. FORM VALIDATION
// ================================
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            console.log('Form is valid');
        }
    });
});

// ================================
// 9. LAZY LOADING IMAGES
// ================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================
// 10. DEBOUNCE HELPER
// ================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedResize = debounce(() => {
    // Código que se ejecuta en resize
}, 250);

window.addEventListener('resize', debouncedResize);

// ================================
// 11. CONSOLE MESSAGE
// ================================
console.log(
    '%c👋 ¡Hola! ',
    'font-size: 20px; font-weight: bold; color: #5B2C6F;'
);
console.log(
    '%c¿Interesado en el código? Visita mi GitHub: https://github.com/GabrielaSemidey',
    'font-size: 12px; color: #14B8A6;'
);
console.log(
    '%cEste portfolio está hecho con HTML, CSS y JavaScript vanilla. Sin frameworks, solo código limpio. 💜',
    'font-size: 12px; color: #64748b;'
);

// ================================
// 12. ERROR HANDLING
// ================================
window.addEventListener('error', (e) => {
    console.error('Error detectado:', e.message);
});

// ================================
// LIGHTBOX PARA IMÁGENES
// ================================
(function() {
    'use strict';
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = lightbox ? lightbox.querySelector('.lightbox__close') : null;
    
    // Si no existe el lightbox, salir
    if (!lightbox) return;
    
    // Seleccionar todas las imágenes que deben abrir lightbox
    const lightboxImages = document.querySelectorAll('.visual-resource img, .gallery-item img');
    
    // Variable para tracking de imágenes
    let currentImages = [];
    let currentIndex = 0;
    
    // Abrir lightbox
    function openLightbox(imgElement, index) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
        
        // Mostrar caption si existe
        const caption = imgElement.getAttribute('alt') || 
                       imgElement.closest('.visual-resource, .gallery-item')?.querySelector('.image-caption')?.textContent || '';
        lightboxCaption.textContent = caption;
        
        currentIndex = index;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
        
        // Focus en el botón de cerrar
        closeBtn.focus();
    }
    
    // Cerrar lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Event listeners para abrir lightbox
    lightboxImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImages = Array.from(lightboxImages);
            openLightbox(img, index);
        });
        
        // Accesibilidad: Enter para abrir
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                currentImages = Array.from(lightboxImages);
                openLightbox(img, index);
            }
        });
        
        // Hacer las imágenes focusables
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', `Ver imagen: ${img.alt || 'Sin descripción'}`);
    });
    
    // Cerrar con botón
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Cerrar con click fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Navegación con flechas (opcional, para múltiples imágenes)
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight' && currentIndex < currentImages.length - 1) {
            openLightbox(currentImages[currentIndex + 1], currentIndex + 1);
        }
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            openLightbox(currentImages[currentIndex - 1], currentIndex - 1);
        }
    });
})();

// ================================
// READING PROGRESS BAR
// ================================
(function() {
    'use strict';
    
    const progressBar = document.querySelector('.reading-progress');
    const progressBarFill = document.querySelector('.reading-progress__bar');
    
    // Solo ejecutar si existe la barra
    if (!progressBar || !progressBarFill) return;
    
    let ticking = false;
    
    function updateProgressBar() {
        // Calcular el progreso de lectura
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Altura total que se puede scrollear
        const scrollableHeight = documentHeight - windowHeight;
        
        // Porcentaje de scroll
        const scrollPercentage = (scrollTop / scrollableHeight) * 100;
        
        // Actualizar el ancho de la barra
        progressBarFill.style.width = `${Math.min(scrollPercentage, 100)}%`;
        
        // Actualizar ARIA para accesibilidad
        progressBar.setAttribute('aria-valuenow', Math.round(scrollPercentage));
        
        // Mostrar la barra cuando hay scroll
        if (scrollTop > 100) {
            progressBar.classList.add('visible');
        } else {
            progressBar.classList.remove('visible');
        }
        
        ticking = false;
    }
    
    // Listener de scroll optimizado
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgressBar);
            ticking = true;
        }
    });
    
    // Actualizar también al redimensionar (por si cambia la altura)
    window.addEventListener('resize', debounce(updateProgressBar, 250));
    
    // Inicializar al cargar la página
    updateProgressBar();
})();
