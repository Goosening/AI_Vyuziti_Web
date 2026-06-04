/**
 * Čistý Vanilla JS pro vícestránkový web s plynulými animacemi.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight aktivního odkazu v sidebaru podle URL
    const links = document.querySelectorAll('.sidebar-nav .nav-link');
    let currentPath = window.location.pathname.split('/').pop();
    
    if (currentPath === '' || currentPath === '/') {
        currentPath = 'index.html';
    }

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Intersection Observer pro plynulé objevování z levé strany (Scroll Reveal)
    const fadeElements = document.querySelectorAll('.fade-in-left');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Prvek musí být alespoň z 15 % viditelný, než se spustí
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animujeme jen jednou pro zachování čistoty
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 3. Page Transition (Plynulý přechod mezi stránkami)
    const mainWrapper = document.querySelector('.main-wrapper');
    
    // Aktivace počátečního objevení (fade-in celého obsahu při prvním načtení)
    requestAnimationFrame(() => {
        mainWrapper.classList.add('page-enter-active');
    });

    // Záchyt kliknutí na odkazy pro fade-out efekt
    const transitionLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Neanimujeme, pokud odkaz vede na stejnou stránku
            if (!href || href === currentPath) return;

            e.preventDefault(); // Zastavení klasického přechodu
            
            // Spuštění fade-out efektu
            mainWrapper.classList.remove('page-enter-active');
            mainWrapper.classList.add('page-leave-active');

            // Počkáme, až doběhne CSS animace (300ms) a pak skutečně přejdeme
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});

// 4. Fix pro BFCache (Safari/Chrome 'Zpět' tlačítko)
// Když se uživatel vrátí zpět, stránka se může načíst z paměti (cache) s opacity: 0
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        const mainWrapper = document.querySelector('.main-wrapper');
        if (mainWrapper) {
            mainWrapper.classList.remove('page-leave-active');
            mainWrapper.classList.add('page-enter-active');
        }
    }
});
