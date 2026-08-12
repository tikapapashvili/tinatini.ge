const page = document.body.dataset.page || 'home';
const lang = document.documentElement.lang === 'ka' ? 'ka' : 'en';
const isKa = lang === 'ka';
const prefix = isKa ? '../' : '';

const nav = isKa
  ? [
      ['home', 'მთავარი', 'ka/index.html'],
      ['about', 'ჩემ შესახებ', 'ka/about.html'],
      ['courses', 'კურსები', 'ka/courses.html'],
      ['portfolio', 'პორტფოლიო', 'portfolio.html'],
      ['consulting', 'კონსულტაცია', 'ka/consulting.html'],
      ['booking', 'დაჯავშნა', 'ka/booking.html'],
      ['contact', 'კონტაქტი', 'ka/contact.html']
    ]
  : [
      ['home', 'Home', 'index.html'],
      ['about', 'About', 'about.html'],
      ['courses', 'Courses', 'courses.html'],
      ['portfolio', 'Portfolio', 'portfolio.html'],
      ['consulting', 'Consulting', 'consulting.html'],
      ['booking', 'Book 1:1', 'booking.html'],
      ['contact', 'Contact', 'contact.html']
    ];

const resolve = href => `${prefix}${href}`;
const header = document.querySelector('[data-site-header]');
const footer = document.querySelector('[data-site-footer]');

if (header) {
  header.className = 'site-header';
  header.innerHTML = `
    <a class="skip-link" href="#main-content">${isKa ? 'მთავარ შინაარსზე გადასვლა' : 'Skip to content'}</a>
    <div class="container nav-shell">
      <a class="brand" href="${resolve(isKa ? 'ka/index.html' : 'index.html')}" aria-label="Tinatin Papashvili">
        <span class="brand-mark">TP</span><span>${isKa ? 'თინათინ პაპაშვილი' : 'Tinatin Papashvili'}</span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
        <span></span><span></span><span></span><span class="sr-only">${isKa ? 'მენიუ' : 'Menu'}</span>
      </button>
      <nav class="main-nav" id="main-nav" aria-label="${isKa ? 'მთავარი ნავიგაცია' : 'Main navigation'}">
        ${nav.map(([id, label, href]) => `<a href="${resolve(href)}" class="${page === id ? 'active' : ''}">${label}</a>`).join('')}
        <a class="language-link" href="${resolve(isKa ? languageTarget(page, 'en') : languageTarget(page, 'ka'))}" lang="${isKa ? 'en' : 'ka'}">◎ ${isKa ? 'English' : 'ქართული'}</a>
      </nav>
    </div>`;
}

if (footer) {
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="${resolve(isKa ? 'ka/index.html' : 'index.html')}"><span class="brand-mark">TP</span><span>${isKa ? 'თინათინ პაპაშვილი' : 'Tinatin Papashvili'}</span></a>
        <p>${isKa ? 'ბიზნეს ანალიტიკოსი · პროექტის მენეჯერი · პროდუქტის მფლობელი' : 'Business Analyst · Project Manager · Product Owner'}</p>
        <div class="social-links" aria-label="Social media">
          <a href="https://www.linkedin.com/in/tinatin-papashvili/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
          <a href="https://www.facebook.com/tikapapashvili" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://www.tiktok.com/@tika.papashvili" target="_blank" rel="noopener" aria-label="TikTok">tt</a>
        </div>
      </div>
      <div class="footer-nav">
        ${nav.slice(1).map(([, label, href]) => `<a href="${resolve(href)}">${label}</a>`).join('')}
        <a href="${resolve(isKa ? 'ka/privacy.html' : 'privacy.html')}">${isKa ? 'კონფიდენციალურობა' : 'Privacy'}</a>
        <a href="${resolve(isKa ? 'ka/legal.html' : 'legal.html')}">${isKa ? 'სამართლებრივი ინფორმაცია' : 'Legal'}</a>
        <span>© <span data-year></span> Tinatin Papashvili</span>
      </div>
    </div>`;
}

function languageTarget(currentPage, targetLang) {
  const maps = {
    en: { home: 'index.html', about: 'about.html', courses: 'courses.html', portfolio: 'portfolio.html', consulting: 'consulting.html', booking: 'booking.html', contact: 'contact.html', privacy: 'privacy.html', legal: 'legal.html', services: 'services.html' },
    ka: { home: 'ka/index.html', about: 'ka/about.html', courses: 'ka/courses.html', portfolio: 'portfolio.html', consulting: 'ka/consulting.html', booking: 'ka/booking.html', contact: 'ka/contact.html', privacy: 'ka/privacy.html', legal: 'ka/legal.html', services: 'ka/index.html' }
  };
  return maps[targetLang][currentPage] || maps[targetLang].home;
}

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
const closeMenu = () => {
  if (!toggle || !menu) return;
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open && window.innerWidth <= 900);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (menu.classList.contains('open') && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
}

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

