

document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('.sidebar-nav .nav-link');
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath) {
        currentPath = 'index.html';
    }

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    
    const fadeElements = document.querySelectorAll('.fade-in-left');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    
    const mainWrapper = document.querySelector('.main-wrapper');
    
    
    requestAnimationFrame(() => {
        mainWrapper.classList.add('page-enter-active');
    });

    
    const transitionLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            
            if (!href || href === currentPath) return;

            e.preventDefault(); 
            
            
            mainWrapper.classList.remove('page-enter-active');
            mainWrapper.classList.add('page-leave-active');

            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});



window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        const mainWrapper = document.querySelector('.main-wrapper');
        if (mainWrapper) {
            mainWrapper.classList.remove('page-leave-active');
            mainWrapper.classList.add('page-enter-active');
        }
    }
});
