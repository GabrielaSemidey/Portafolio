/* ================================
   MAIN.JS - JavaScript profesional y limpio
   Portfolio Gabriela Ojeda Semidey
   ================================ */

'use strict';

// ================================
// 1. HEADER SCROLL EFFECT
// ================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Añadir clase cuando hay scroll
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ================================
// 2. SMOOTH SCROLL PARA NAVEGACIÓN
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorar # solo
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
// 3. SCROLL REVEAL ANIMATIONS
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Dejar de observar una vez revelado (mejor performance)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase scroll-reveal
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});

// ================================
// 4. ACTIVE NAV LINK ON SCROLL
// ================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// FILTROS DE PROYECTOS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleccionar todos los botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 2. Seleccionar todas las cards de proyecto
    const projectCards = document.querySelectorAll('[data-category]');
    
    // 3. Verificar que existan elementos
    if (filterButtons.length === 0) {
        console.log('⚠️ No se encontraron botones de filtro');
        return;
    }
    
    if (projectCards.length === 0) {
        console.log('⚠️ No se encontraron cards de proyecto');
        return;
    }
    
    console.log(`✅ Filtros cargados: ${filterButtons.length} botones, ${projectCards.length} proyectos`);
    
    // 4. Agregar evento click a cada botón
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 5. Obtener el filtro seleccionado
            const filterValue = this.getAttribute('data-filter');
            console.log(`🔍 Filtro seleccionado: ${filterValue}`);
            
            // 6. Remover "active" de todos los botones
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 7. Agregar "active" al botón clickeado
            this.classList.add('active');
            
            // 8. Filtrar las cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Si el filtro es "all" O la categoría coincide
                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Mostrar la card
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    // Ocultar la card
                    card.classList.add('hidden');
                }
            });
        });
    });
});

// Helpers para fade in/out
function fadeIn(element) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.4s ease';
        element.style.opacity = '1';
    }, 10);
}

function fadeOut(element) {
    element.style.transition = 'opacity 0.3s ease';
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 300);
}

// ================================
// 6. MOBILE MENU (OPCIONAL)
// ================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Cambiar icono
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Cerrar menú al hacer click en un link
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
// 7. EXTERNAL LINKS (abrir en nueva pestaña)
// ================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Solo si no es del mismo dominio
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ================================
// 8. FORM VALIDATION (si tienes forms)
// ================================
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
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
            // Aquí iría el envío del formulario
            console.log('Form is valid');
            // form.submit();
        }
    });
});

// ================================
// 9. LAZY LOADING IMAGES (opcional pero profesional)
// ================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser soporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback con Intersection Observer
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
// 10. PERFORMANCE: Debounce helper
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

// Aplicar debounce al resize (si necesitas)
const debouncedResize = debounce(() => {
    // Código que se ejecuta en resize
    // Por ejemplo, recalcular alturas
}, 250);

window.addEventListener('resize', debouncedResize);

// ================================
// 11. CONSOLE MESSAGE (opcional, profesional)
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
    // Aquí podrías enviar el error a un servicio de tracking
});

