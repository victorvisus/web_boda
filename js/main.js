// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
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
    document.getElementById('confirmar').scrollIntoView({ behavior: 'smooth' });
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
  confirmationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const drink = document.getElementById('drink').value;
    const preferences = document.getElementById('preferences').value;

    const subject = encodeURIComponent('Confirmación de asistencia - Boda Jeny & Víctor');
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Email: ${email}\n` +
      `Bebida preferida: ${drink}\n` +
      `Preferencias barra libre: ${preferences}`
    );

    window.location.href = `mailto:victor.vxg@gmail.com?subject=${subject}&body=${body}`;
    
    if (formSuccess) {
      formSuccess.classList.remove('hidden');
    }
    confirmationForm.reset();
    
    setTimeout(() => {
      if (formSuccess) {
        formSuccess.classList.add('hidden');
      }
    }, 5000);
  });
}

// Music Form
const musicForm = document.getElementById('music-form');
const musicSuccess = document.getElementById('music-success');

if (musicForm) {
  musicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('music-name').value;
    const song = document.getElementById('song-name').value;
    const artist = document.getElementById('artist-name').value;

    const subject = encodeURIComponent('Sugerencia musical - Boda Jeny & Víctor');
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Canción: ${song}\n` +
      `Artista: ${artist}`
    );

    window.location.href = `mailto:victor.vxg@gmail.com?subject=${subject}&body=${body}`;
    
    if (musicSuccess) {
      musicSuccess.classList.remove('hidden');
    }
    musicForm.reset();
    
    setTimeout(() => {
      if (musicSuccess) {
        musicSuccess.classList.add('hidden');
      }
      closeModal();
    }, 2000);
  });
}

// Scroll Reveal Animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  scrollRevealElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 100);
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Smooth parallax and scroll effects
const heroText = document.querySelector('.animate-reveal');
const header = document.getElementById('header');
const glows = document.querySelectorAll('.eclipse-glow');

window.addEventListener('scroll', () => {
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
});

// Atmospheric Glow Interaction
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  glows.forEach((glow, index) => {
    const speed = (index + 1) * 20;
    glow.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Add staggered animation delays to scroll-reveal elements
scrollRevealElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.1}s`;
});
