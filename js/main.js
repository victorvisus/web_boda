// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

const closeMobileMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
};

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMobileMenu);
}

if (mobileMenuLinks) {
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// FAB Scroll to Form
const fab = document.getElementById('fab');
if (fab) {
  fab.addEventListener('click', () => {
    const form = document.getElementById('confirmation-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  });
}

// CTA Button Scroll to Form
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    document.getElementById('confirmar').scrollIntoView({ behavior: 'smooth' });
  });
}

// Music Modal
const musicModal = document.getElementById('music-modal');
const musicSuggestionBtn = document.getElementById('music-suggestion-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

if (musicSuggestionBtn && musicModal) {
  musicSuggestionBtn.addEventListener('click', () => {
    musicModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

const closeModal = () => {
  if (musicModal) {
    musicModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

if (musicModal) {
  musicModal.addEventListener('click', (e) => {
    if (e.target === musicModal) closeModal();
  });
}

// Confirmation Form
const confirmationForm = document.getElementById('confirmation-form');
const formSuccess = document.getElementById('form-success');

if (confirmationForm) {
  confirmationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const preferences = document.getElementById('preferences').value;

    try {
      const res = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, preferences }),
      });

      const data = await res.json();

      if (data.success && formSuccess) {
        formSuccess.classList.remove('hidden');
      }
    } catch (err) {
      if (formSuccess) {
        formSuccess.querySelector('p').textContent = 'Error al enviar. Inténtalo de nuevo.';
        formSuccess.classList.remove('hidden');
      }
    }

    confirmationForm.reset();

    setTimeout(() => {
      if (formSuccess) {
        formSuccess.classList.add('hidden');
        formSuccess.querySelector('p').textContent = 'Tu petición ha sido enviada al umbral. Espera nuestra respuesta.';
      }
    }, 5000);
  });
}

// Music Form
const musicForm = document.getElementById('music-form');
const musicSuccess = document.getElementById('music-success');

if (musicForm) {
  musicForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('music-name').value;
    const song = document.getElementById('song-name').value;
    const artist = document.getElementById('artist-name').value;

    try {
      const res = await fetch('/api/send-music-suggestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, song, artist }),
      });

      const data = await res.json();

      if (data.success && musicSuccess) {
        musicSuccess.classList.remove('hidden');
      }
    } catch (err) {
      if (musicSuccess) {
        musicSuccess.querySelector('p').textContent = 'Error al enviar. Inténtalo de nuevo.';
        musicSuccess.classList.remove('hidden');
      }
    }

    musicForm.reset();

    setTimeout(() => {
      if (musicSuccess) {
        musicSuccess.classList.add('hidden');
        musicSuccess.querySelector('p').textContent = 'Tu sugerencia ha sido enviada al ritual sonoro.';
      }
      closeModal();
    }, 2000);
  });
}

// Contact Modal
const contactModal = document.getElementById('contact-modal');
const contactLink = document.getElementById('contact-link');
const closeContactModalBtn = document.getElementById('close-contact-modal-btn');
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

if (contactLink && contactModal) {
  contactLink.addEventListener('click', () => {
    contactModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

const closeContactModal = () => {
  if (contactModal) {
    contactModal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

if (closeContactModalBtn) {
  closeContactModalBtn.addEventListener('click', closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success && contactSuccess) {
        contactSuccess.classList.remove('hidden');
      }
    } catch (err) {
      if (contactSuccess) {
        contactSuccess.querySelector('p').textContent = 'Error al enviar. Inténtalo de nuevo.';
        contactSuccess.classList.remove('hidden');
      }
    }

    contactForm.reset();

    setTimeout(() => {
      if (contactSuccess) {
        contactSuccess.classList.add('hidden');
        contactSuccess.querySelector('p').textContent = 'Tu mensaje ha sido enviado. Te responderemos en breve.';
      }
      closeContactModal();
    }, 3000);
  });
}

// Scroll Reveal Animation with IntersectionObserver
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
});

scrollRevealElements.forEach((el) => revealObserver.observe(el));

// Smooth parallax and scroll effects (throttled with rAF)
const heroText = document.querySelector('.animate-reveal');
const header = document.getElementById('header');
const glows = document.querySelectorAll('.eclipse-glow');

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;

      if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroText.style.opacity = 1 - scrolled / 800;
      }

      if (header) {
        if (scrolled > 50) {
          header.classList.add('py-4', 'bg-[#0E0E11]/80');
          header.classList.remove('py-8');
        } else {
          header.classList.remove('py-4', 'bg-[#0E0E11]/80');
          header.classList.add('py-8');
        }
      }

      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

// Atmospheric Glow Interaction (throttled with rAF)
let mouseTicking = false;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth - 0.5;
  mouseY = e.clientY / window.innerHeight - 0.5;

  if (!mouseTicking) {
    requestAnimationFrame(() => {
      glows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        glow.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
      });
      mouseTicking = false;
    });
    mouseTicking = true;
  }
});


