 /* ─── 1. Navbar scroll effect ─── */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 40;

      if (scrolled) {
        navbar.style.background = 'rgba(255,255,255,0.97)';
        navbar.style.boxShadow = '0 2px 24px rgba(0,0,0,0.08)';
        navbar.style.backdropFilter = 'none';
      } else {
        navbar.style.background = '';
        navbar.style.boxShadow = '';
        navbar.style.backdropFilter = '';
      }

      navbar.classList.toggle('py-1', scrolled);
      navbar.classList.toggle('py-6', !scrolled);
      // Flip link colours (mobile links only)
      navbar.querySelectorAll('.mobile-link').forEach(el => {
        el.classList.toggle('text-gray-800', scrolled);
        el.classList.toggle('text-white', !scrolled);
      });
      const logo = navbar.querySelector('.logo-text');
      if (logo) logo.classList.toggle('text-gray-900', scrolled);
      document.getElementById('hamburger').classList.toggle('text-gray-900', scrolled);
    }, { passive: true });



    /* ─── 2. Hamburger toggle ─── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });


    /* ─── 4. Smooth scroll ─── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Click to select a date
    document.querySelectorAll('.day-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });