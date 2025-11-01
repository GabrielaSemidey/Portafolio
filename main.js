/* ================================
   MAIN.JS - 
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
    
    if (!lightbox) return;
    
    const lightboxImages = document.querySelectorAll('.visual-resource img, .gallery-item img');
    
    let currentImages = [];
    let currentIndex = 0;
    
    function openLightbox(imgElement, index) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
        
        // Mostrar caption si existe
        const caption = imgElement.getAttribute('alt') || 
                       imgElement.closest('.visual-resource, .gallery-item')?.querySelector('.image-caption')?.textContent || '';
        lightboxCaption.textContent = caption;
        
        currentIndex = index;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        closeBtn.focus();
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
    }
    
    lightboxImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImages = Array.from(lightboxImages);
            openLightbox(img, index);
        });
        
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                currentImages = Array.from(lightboxImages);
                openLightbox(img, index);
            }
        });
        
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', `Ver imagen: ${img.alt || 'Sin descripción'}`);
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
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
        
        const scrollableHeight = documentHeight - windowHeight;
        
        const scrollPercentage = (scrollTop / scrollableHeight) * 100;
        
        progressBarFill.style.width = `${Math.min(scrollPercentage, 100)}%`;
        
        progressBar.setAttribute('aria-valuenow', Math.round(scrollPercentage));
        
        if (scrollTop > 100) {
            progressBar.classList.add('visible');
        } else {
            progressBar.classList.remove('visible');
        }
        
        ticking = false;
    }
    
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

/* ================================
   LANGUAGE SWITCHER
   Agregar al FINAL de main.js
   ================================ */

(function() {
  'use strict';
  
  // Obtener idioma guardado o detectar del navegador
  const savedLang = localStorage.getItem('preferred-language') || 
                    (navigator.language.startsWith('es') ? 'es' : 'en');
  
  let currentLang = savedLang;
  
  // Elementos
  const langBtn = document.querySelector('.language-toggle__btn');
  const langFlag = document.querySelector('.language-toggle__flag');
  const langText = document.querySelector('.language-toggle__text');
  
  if (!langBtn) return;
  
  // Función para traducir un elemento
  function translateElement(element, key) {
    if (!translations[currentLang] || !translations[currentLang][key]) {
      console.warn(`Translation missing for key: ${key}`);
      return;
    }
    element.textContent = translations[currentLang][key];
  }
  
  // Función para aplicar todas las traducciones
  function applyTranslations() {
    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      translateElement(element, key);
    });
    
    // Actualizar el botón de idioma
    if (currentLang === 'en') {
      langFlag.textContent = '🇬🇧';
      langText.textContent = 'EN';
      langBtn.setAttribute('title', 'Cambiar a Español');
      langBtn.setAttribute('data-lang', 'en');
    } else {
      langFlag.textContent = '🇪🇸';
      langText.textContent = 'ES';
      langBtn.setAttribute('title', 'Switch to English');
      langBtn.setAttribute('data-lang', 'es');
    }
    
    // Actualizar atributo lang del HTML
    document.documentElement.setAttribute('lang', currentLang);
  }
  
  // Función para cambiar idioma
  function switchLanguage() {
    // Animación
    langBtn.classList.add('changing');
    setTimeout(() => langBtn.classList.remove('changing'), 300);
    
    // Cambiar idioma
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Guardar preferencia
    localStorage.setItem('preferred-language', currentLang);
    
    // Aplicar traducciones
    applyTranslations();
    
    console.log(`%c🌐 Idioma cambiado a: ${currentLang.toUpperCase()}`, 
                'color: #14B8A6; font-weight: bold;');
  }
  
  // Event listener
  langBtn.addEventListener('click', switchLanguage);
  
  // Aplicar idioma inicial
  applyTranslations();
  
  // Log inicial
  console.log(`%c🌐 Idioma inicial: ${currentLang.toUpperCase()}`, 
              'color: #5B2C6F; font-weight: bold;');
})();

/* ================================
   MICRO-INTERACCIONES
   Agregar al FINAL de main.js
   ================================ */

// ================================
// PARALLAX HERO
// ================================
(function() {
  'use strict';
  
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    // Solo aplicar parallax si estamos en la sección hero
    if (scrolled < heroHeight) {
      const photo = hero.querySelector('.hero__photo');
      const leftContent = hero.querySelector('.hero__left');
      const stack = hero.querySelector('.hero__stack');
      
      // Diferentes velocidades para cada elemento
      if (photo) {
        photo.style.setProperty('--parallax-photo', `${scrolled * 0.3}px`);
      }
      
      if (leftContent) {
        leftContent.style.setProperty('--parallax-text', `${scrolled * 0.15}px`);
      }
      
      if (stack) {
        stack.style.setProperty('--parallax-stack', `${scrolled * 0.1}px`);
      }
      
      hero.classList.add('parallax-active');
    } else {
      hero.classList.remove('parallax-active');
    }
    
    ticking = false;
  }
  
  // Solo aplicar parallax en desktop
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
})();

// ================================
// SKILL PILLS - Tooltips con nivel
// ================================
(function() {
  'use strict';
  
  const skillPills = document.querySelectorAll('.skill-pill');
  
  const levelText = {
    'advanced': '⭐ Nivel Avanzado - Uso diario',
    'intermediate': '📚 Nivel Intermedio - Experiencia práctica',
    'learning': '🌱 Aprendiendo - En desarrollo activo'
  };
  
  skillPills.forEach(pill => {
    // Detectar el nivel según la clase
    let level = 'intermediate';
    if (pill.classList.contains('skill-pill--advanced')) {
      level = 'advanced';
    } else if (pill.classList.contains('skill-pill--learning')) {
      level = 'learning';
    }
    
    // Agregar el atributo data-level para el CSS
    pill.setAttribute('data-level', levelText[level]);
  });
})();

// ================================
// SWIPE INDICATOR - Proyectos mobile
// ================================
(function() {
  'use strict';
  
  if (window.innerWidth > 768) return; // Solo en mobile
  
  const projectsGrid = document.querySelector('.projects__grid');
  if (!projectsGrid) return;
  
  // Crear indicador de swipe
  const indicator = document.createElement('div');
  indicator.className = 'swipe-indicator';
  indicator.innerHTML = '<i class="fas fa-arrow-right"></i> Desliza para ver más proyectos';
  
  projectsGrid.parentElement.insertBefore(indicator, projectsGrid.nextSibling);
  
  // Ocultar el indicador después del primer scroll
  let hasScrolled = false;
  projectsGrid.addEventListener('scroll', () => {
    if (!hasScrolled) {
      hasScrolled = true;
      indicator.style.opacity = '0';
      setTimeout(() => {
        indicator.style.display = 'none';
      }, 300);
    }
  }, { once: true });
})();

// ================================
// SMOOTH SCROLL para anchors
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
      
      // Cerrar mobile menu si está abierto
      const navLinks = document.querySelector('.nav-links');
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileBtn) mobileBtn.classList.remove('active');
      }
    }
  });
});

console.log('%c✨ Micro-interacciones activadas', 'color: #14B8A6; font-weight: bold;');

/* ==========================================
   LUMI - TIENDA.JS
   Funcionalidad de la tienda
   ========================================== */

// Estado global
let currentBalance = 1250;
let currentReward = null;

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🛍️ Tienda - Cargada');
    
    // Inicializar filtros
    initFilters();
    
    // Cargar balance del usuario
    loadUserBalance();
    
    // Inicializar botones de canje
    initRewardButtons();
    
    // Inicializar modals
    initModals();
    
    console.log('✅ Tienda lista');
});

// ==========================================
// FILTROS DE CATEGORÍAS
// ==========================================
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const rewardCards = document.querySelectorAll('.reward-card');
    
    if (filterButtons.length === 0) {
        console.log('ℹ️ No hay filtros disponibles');
        return;
    }
    
    console.log('🔍 Inicializando filtros');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar cards
            filterRewards(category, rewardCards);
            
            console.log('📁 Filtro aplicado:', category);
        });
    });
    
    console.log('✅ Filtros inicializados');
}

function filterRewards(category, cards) {
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all') {
            // Mostrar todas
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            // Filtrar por categoría
            if (cardCategory === category) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ==========================================
// CARGAR BALANCE
// ==========================================
function loadUserBalance() {
    // En producción esto vendría de tu backend/API
    currentBalance = 1250;
    
    // Actualizar displays de balance
    updateBalanceDisplays();
    
    // Habilitar/deshabilitar botones según balance
    checkAffordableRewards();
    
    console.log('💰 Balance cargado:', currentBalance, 'LC');
}

function updateBalanceDisplays() {
    const balanceElements = [
        document.getElementById('balance-amount'),
        document.getElementById('nav-coins')
    ];
    
    balanceElements.forEach(el => {
        if (el) {
            if (el.id === 'nav-coins') {
                el.textContent = formatNumber(currentBalance);
            } else {
                el.textContent = `${formatNumber(currentBalance)} LC`;
            }
        }
    });
}

function checkAffordableRewards() {
    const rewardCards = document.querySelectorAll('.reward-card');
    
    rewardCards.forEach(card => {
        const price = parseInt(card.getAttribute('data-price'));
        const button = card.querySelector('.btn-reward');
        
        if (!price || !button) return;
        
        // Si el precio es mayor al balance, deshabilitar
        if (price > currentBalance && !button.classList.contains('btn-reward-disabled')) {
            button.classList.add('btn-reward-disabled');
            button.disabled = true;
            button.innerHTML = '<i data-lucide="lock"></i> Insuficiente';
            
            // Recrear iconos
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    });
}

// ==========================================
// BOTONES DE RECOMPENSAS
// ==========================================
function initRewardButtons() {
    const rewardButtons = document.querySelectorAll('.btn-reward:not(.btn-reward-disabled)');
    
    rewardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.reward-card');
            
            const rewardData = {
                name: card.querySelector('.reward-title').textContent,
                description: card.querySelector('.reward-description').textContent,
                price: parseInt(card.getAttribute('data-price')),
                icon: card.querySelector('.reward-icon').style.background,
                iconName: card.querySelector('.reward-icon i').getAttribute('data-lucide')
            };
            
            openConfirmModal(rewardData);
        });
    });
    
    console.log('✅ Botones de recompensas inicializados');
}

// ==========================================
// MODALS
// ==========================================
function initModals() {
    // Botones de cerrar/cancelar
    document.getElementById('modal-close')?.addEventListener('click', closeConfirmModal);
    document.getElementById('btn-cancel')?.addEventListener('click', closeConfirmModal);
    
    // Botón de confirmar
    document.getElementById('btn-confirm')?.addEventListener('click', confirmClaim);
    
    // Botón de seguir comprando
    document.getElementById('btn-continue-shopping')?.addEventListener('click', closeSuccessModal);
    
    // Cerrar modal al hacer click fuera
    document.getElementById('modal-overlay')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closeConfirmModal();
        }
    });
    
    document.getElementById('modal-success-overlay')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSuccessModal();
        }
    });
    
    console.log('✅ Modals inicializados');
}

function openConfirmModal(rewardData) {
    currentReward = rewardData;
    
    // Actualizar contenido del modal
    document.getElementById('reward-name').textContent = rewardData.name;
    document.getElementById('reward-desc').textContent = rewardData.description;
    document.getElementById('balance-current').textContent = `${formatNumber(currentBalance)} LC`;
    document.getElementById('balance-price').textContent = `-${formatNumber(rewardData.price)} LC`;
    document.getElementById('balance-after').textContent = `${formatNumber(currentBalance - rewardData.price)} LC`;
    
    // Actualizar icono del modal
    const modalIcon = document.getElementById('modal-icon');
    modalIcon.style.background = rewardData.icon;
    modalIcon.querySelector('i').setAttribute('data-lucide', rewardData.iconName);
    
    // Mostrar modal
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Recrear iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('📦 Modal de confirmación abierto:', rewardData.name);
}

function closeConfirmModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
    currentReward = null;
    
    console.log('❌ Modal de confirmación cerrado');
}

function confirmClaim() {
    if (!currentReward) return;
    
    console.log('✅ Canjeando recompensa:', currentReward.name);
    
    // Actualizar balance
    currentBalance -= currentReward.price;
    updateBalanceDisplays();
    checkAffordableRewards();
    
    // Guardar recompensa canjeada (aquí iría tu lógica de backend)
    saveClaimedReward(currentReward);
    
    // Cerrar modal de confirmación
    closeConfirmModal();
    
    // Abrir modal de éxito
    setTimeout(() => {
        openSuccessModal();
    }, 300);
}

function openSuccessModal() {
    document.getElementById('success-balance').textContent = `${formatNumber(currentBalance)} LC`;
    document.getElementById('modal-success-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Recrear iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('🎉 Modal de éxito abierto');
}

function closeSuccessModal() {
    document.getElementById('modal-success-overlay').classList.remove('active');
    document.body.style.overflow = '';
    
    console.log('❌ Modal de éxito cerrado');
}

// ==========================================
// GUARDAR RECOMPENSA
// ==========================================
function saveClaimedReward(reward) {
    // Obtener recompensas guardadas
    let claimedRewards = loadFromStorage('claimedRewards') || [];
    
    // Agregar nueva recompensa
    const claimedReward = {
        ...reward,
        claimedAt: new Date().toISOString(),
        status: 'active'
    };
    
    claimedRewards.push(claimedReward);
    
    // Guardar en localStorage
    saveToStorage('claimedRewards', claimedRewards);
    
    console.log('💾 Recompensa guardada:', claimedReward);
}

// ==========================================
// NOTIFICACIONES
// ==========================================
function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'var(--teal)' : type === 'error' ? 'var(--coral)' : 'var(--navy)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`💾 Guardado en storage: ${key}`);
    } catch (error) {
        console.error('❌ Error guardando:', error);
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('❌ Error cargando:', error);
        return null;
    }
}

console.log('🛍️ tienda.js cargado completamente');

/* ==========================================
   LUMI - MIS-RECOMPENSAS.JS
   Gestión de recompensas canjeadas
   ========================================== */

let claimedRewards = [];
let currentFilter = 'all';

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎁 Mis Recompensas - Cargada');
    
    // Cargar recompensas canjeadas
    loadClaimedRewards();
    
    // Inicializar filtros
    initStatusFilters();
    
    // Cargar balance
    loadBalance();
    
    console.log('✅ Mis Recompensas lista');
});

// ==========================================
// CARGAR RECOMPENSAS
// ==========================================
function loadClaimedRewards() {
    // Cargar desde localStorage
    claimedRewards = loadFromStorage('claimedRewards') || [];
    
    console.log('📦 Recompensas cargadas:', claimedRewards.length);
    
    // Renderizar
    renderRewards();
}

function renderRewards() {
    const grid = document.getElementById('claimed-rewards-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!grid) return;
    
    // Filtrar recompensas según estado
    const filteredRewards = filterRewardsByStatus(claimedRewards, currentFilter);
    
    // Si no hay recompensas
    if (filteredRewards.length === 0) {
        if (emptyState) {
            emptyState.classList.remove('hidden');
        }
        // Limpiar grid excepto empty state
        Array.from(grid.children).forEach(child => {
            if (child.id !== 'empty-state') {
                child.remove();
            }
        });
        return;
    }
    
    // Ocultar empty state
    if (emptyState) {
        emptyState.classList.add('hidden');
    }
    
    // Limpiar grid
    Array.from(grid.children).forEach(child => {
        if (child.id !== 'empty-state') {
            child.remove();
        }
    });
    
    // Renderizar cada recompensa
    filteredRewards.forEach(reward => {
        const card = createRewardCard(reward);
        grid.appendChild(card);
    });
    
    // Recrear iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('✅ Recompensas renderizadas:', filteredRewards.length);
}

function createRewardCard(reward) {
    const card = document.createElement('div');
    card.className = 'claimed-card';
    card.setAttribute('data-status', reward.status);
    
    const claimedDate = new Date(reward.claimedAt);
    const dateStr = formatDate(claimedDate);
    
    card.innerHTML = `
        <div class="claimed-status status-${reward.status}">
            ${reward.status === 'active' ? 'Activa' : 'Usada'}
        </div>
        
        <div class="claimed-icon" style="background: ${reward.icon};">
            <i data-lucide="${reward.iconName}"></i>
        </div>
        
        <h3 class="claimed-title">${reward.name}</h3>
        <p class="claimed-description">${reward.description}</p>
        
        <div class="claimed-meta">
            <div class="claimed-date">
                <i data-lucide="calendar"></i>
                <span>${dateStr}</span>
            </div>
            <div class="claimed-price">
                <i data-lucide="coins"></i>
                <span>${formatNumber(reward.price)} LC</span>
            </div>
        </div>
        
        <div class="claimed-actions">
            <button class="btn-use ${reward.status === 'used' ? 'btn-used' : ''}" 
                    ${reward.status === 'used' ? 'disabled' : ''}>
                <i data-lucide="${reward.status === 'used' ? 'check' : 'play'}"></i>
                ${reward.status === 'used' ? 'Usada' : 'Usar ahora'}
            </button>
        </div>
    `;
    
    // Agregar evento al botón de usar
    if (reward.status === 'active') {
        const useBtn = card.querySelector('.btn-use');
        useBtn.addEventListener('click', () => useReward(reward));
    }
    
    return card;
}

// ==========================================
// FILTROS DE ESTADO
// ==========================================
function initStatusFilters() {
    const filterButtons = document.querySelectorAll('.status-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Actualizar filtro
            currentFilter = status;
            
            // Re-renderizar
            renderRewards();
            
            console.log('🔍 Filtro aplicado:', status);
        });
    });
    
    console.log('✅ Filtros de estado inicializados');
}

function filterRewardsByStatus(rewards, status) {
    if (status === 'all') {
        return rewards;
    }
    return rewards.filter(r => r.status === status);
}

// ==========================================
// USAR RECOMPENSA
// ==========================================
function useReward(reward) {
    console.log('🎁 Usando recompensa:', reward.name);
    
    // Aquí iría la lógica específica de cada tipo de recompensa
    // Por ejemplo:
    // - Si es un tema visual: aplicarlo al dashboard
    // - Si es una clase: redirigir a la clase
    // - Si es un PDF: descargarlo
    // etc.
    
    // Marcar como usada
    const updatedRewards = claimedRewards.map(r => {
        if (r.claimedAt === reward.claimedAt && r.name === reward.name) {
            return { ...r, status: 'used', usedAt: new Date().toISOString() };
        }
        return r;
    });
    
    // Guardar
    saveToStorage('claimedRewards', updatedRewards);
    claimedRewards = updatedRewards;
    
    // Re-renderizar
    renderRewards();
    
    // Notificación
    showNotification(`¡${reward.name} activada!`, 'success');
}

// ==========================================
// CARGAR BALANCE
// ==========================================
function loadBalance() {
    const balance = 1250; // Esto vendría de tu estado global
    
    const navCoins = document.getElementById('nav-coins');
    if (navCoins) {
        navCoins.textContent = formatNumber(balance);
    }
    
    console.log('💰 Balance cargado:', balance);
}

// ==========================================
// NOTIFICACIONES
// ==========================================
function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'var(--teal)' : type === 'error' ? 'var(--coral)' : 'var(--navy)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`💾 Guardado en storage: ${key}`);
    } catch (error) {
        console.error('❌ Error guardando:', error);
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('❌ Error cargando:', error);
        return null;
    }
}

console.log('🎁 mis-recompensas.js cargado completamente');