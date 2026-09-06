tailwind.config = {
      theme: {
        extend: {
          colors: {
            ivory: '#FDFBF7',
            'ivory-dark': '#F5F0E8',
            gold: '#D4AF37',
            'gold-deep': '#B8860B',
            'gold-light': '#F0D060',
            charcoal: '#2C2C2C',
            'charcoal-soft': '#4A4A4A',
          },
          fontFamily: {
            playfair: ['"Playfair Display"', 'serif'],
            dm: ['"DM Sans"', 'sans-serif'],
          },
        }
      }
    }

    document.getElementById('nav-toggle')
  .addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
// Init AOS
  AOS.init({ duration: 700, once: true, offset: 60 });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Close mobile menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('open');
    });
  });