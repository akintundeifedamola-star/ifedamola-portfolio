const btn = document.getElementById('get-to-know-btn');
const sections = ['about', 'skills', 'projects', 'contact'];

btn.addEventListener('click', () => {
    sections.forEach((id, index) => {
        setTimeout(() => {
            const section = document.getElementById(id);
            section.classList.add('slide-in');
        }, index * 400); // stagger animations
    });
    // Scroll to About after button click
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

const contactIcons = document.querySelectorAll('.contact-icons a');

contactIcons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.3}s`;
});