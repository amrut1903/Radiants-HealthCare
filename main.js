document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle with Overlay
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    function closeMenu() {
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (mobileToggle) mobileToggle.classList.add('active');
        if (navLinks) navLinks.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
            // Also close any open dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
        }
    });

    // Mobile & Desktop Dropdown Toggle
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const wasActive = dropdown.classList.contains('active');
                navDropdowns.forEach(d => d.classList.remove('active'));
                if (!wasActive) {
                    dropdown.classList.add('active');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            navDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 500); // Small delay to let the user see the loader animation
    });

    // 2. Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Number Counter Animation (for Stats Section)
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const countOptions = {
        threshold: 0.5
    };

    const countObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                statNumbers.forEach(num => {
                    const target = +num.getAttribute('data-target');
                    const duration = 2000; // ms
                    const stepTime = Math.abs(Math.floor(duration / target));
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += 1;
                        num.innerText = current;
                        if (current >= target) {
                            num.innerText = target;
                            clearInterval(timer);
                        }
                    }, stepTime);
                });
                observer.disconnect();
            }
        });
    }, countOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        countObserver.observe(statsSection);
    }

    // 5. Parallax Effect for Hero Background
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        if(heroBg && scrollPosition < window.innerHeight) {
            heroBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        }
    });

    // 6. Magnetic Buttons (Hover Effect)
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
});
