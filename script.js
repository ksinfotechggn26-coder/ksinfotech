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
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// The enquiry form prepares an email in the visitor's default email application.
const BUSINESS_EMAIL = 'ksinfotechggn26@gmail.com';
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('Website enquiry - ' + data.get('service'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Phone: ' + (data.get('phone') || 'Not provided') + '\n' +
    'Service: ' + data.get('service') + '\n\n' +
    'Message:\n' + (data.get('message') || 'No additional details provided')
  );
  window.location.href = 'mailto:' + BUSINESS_EMAIL + '?subject=' + subject + '&body=' + body;
});
