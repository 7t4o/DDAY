document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Dropdown toggle for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown').forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main-nav')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Remove old "currentLocation" logic and add IntersectionObserver
    // Highlight nav link when its target section is in view (moves golden underline)
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
    const sections = navLinks
        .map(l => document.querySelector(l.getAttribute('href')))
        .filter(Boolean);

    if (sections.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.target.id) return;
                const link = document.querySelector('.nav-menu a[href="#' + entry.target.id + '"]');
                if (!link) return;
                if (entry.isIntersecting) {
                    // remove active from all nav links then add to current
                    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }, {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // trigger when section near center
            threshold: 0
        });

        sections.forEach(s => io.observe(s));

        // ensure at least first link active when no section intersecting (e.g., top)
        window.addEventListener('scroll', function() {
            const anyActive = !!document.querySelector('.nav-menu a.active');
            if (!anyActive) {
                // choose first visible link by viewport or fallback to first nav link
                for (const s of sections) {
                    const rect = s.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.2) {
                        const link = document.querySelector('.nav-menu a[href="#' + s.id + '"]');
                        if (link) {
                            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                            link.classList.add('active');
                            return;
                        }
                    }
                }
                // fallback
                const first = document.querySelector('.nav-menu a[href^="#"]');
                if (first) {
                    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                    first.classList.add('active');
                }
            }
        }, { passive: true });
    }
	
    // helper: navigate to a page inside assets/Html (or local when already there)
    function navigateToHtml(page) {
        // page example: 'login.php' or 'register.php'
        const path = location.pathname.replace(/\\/g,'/'); // normalize
        // if current URL is inside assets/Html use relative path, else go to assets/Html/
        if (path.includes('/assets/Html/')) {
            location.href = page;
        } else {
            location.href = 'assets/Html/' + page;
        }
    }
    
    // Login button functionality (header buttons)
    const loginBtn = document.querySelectorAll('.login-btn');
    loginBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // if it's an anchor let default, otherwise navigate
            if (this.tagName.toLowerCase() === 'a') return;
            navigateToHtml('login.php');
        });
    });

    // Register button functionality
    const registerBtn = document.querySelectorAll('.register-btn');
    registerBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.tagName.toLowerCase() === 'a') return;
            navigateToHtml('register.php');
        });
    });

    // Cart button - Navigate to donations section
    const cartBtn = document.querySelectorAll('.cart-btn');
    cartBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Check if we're on index.html
            const path = location.pathname.replace(/\\/g,'/');
            if (path.includes('index.html') || path.endsWith('/')) {
                // Already on index, scroll to donations
                const donationsSection = document.querySelector('#donations');
                if (donationsSection) {
                    donationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Navigate to index.html with donations hash
                if (path.includes('/assets/Html/')) {
                    location.href = 'index.html#donations';
                } else if (path.includes('/assets/php/')) {
                    location.href = '../Html/index.html#donations';
                } else {
                    location.href = 'assets/Html/index.html#donations';
                }
            }
        });
    });
    
    // Donate button functionality
    const donateBtn = document.querySelector('.donate-btn');
    if(donateBtn) {
        donateBtn.addEventListener('click', function() {
            alert('صفحة التبرعات ستفتح قريباً');
            // window.location.href = 'donate.html';
        });
    }
});
