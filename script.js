// KS Infotech website interactions
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your real business email before publishing.
// The enquiry form opens the visitor's default email app; it does not store messages.
const BUSINESS_EMAIL = 'YOUR-EMAIL@example.com';
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  if (BUSINESS_EMAIL === 'YOUR-EMAIL@example.com') {
    alert('Website setup note: please replace YOUR-EMAIL@example.com in script.js with your business email before using the enquiry form.');
    return;
  }
  const data = new FormData(this);
  const subject = encodeURIComponent('Website enquiry - ' + data.get('service'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\n' +
    'Phone: ' + data.get('phone') + '\\n' +
    'Service: ' + data.get('service') + '\\n\\n' +
    'Message:\\n' + data.get('message')
  );
  window.location.href = 'mailto:' + BUSINESS_EMAIL + '?subject=' + subject + '&body=' + body;
});
