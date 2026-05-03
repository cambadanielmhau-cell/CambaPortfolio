```javascript
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('show');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress-bar');

  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
      skill.style.width = skill.classList.contains('html') ? '90%' :
        skill.classList.contains('css') ? '85%' :
          '75%';
    }
  });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const email = document.querySelector("input[type='email']")?.value || '';

    if (!email.includes('@')) {
      alert('Please enter a valid email');
      e.preventDefault();
    }
  });
}
```

