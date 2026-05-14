let revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

const loadPageData = async () => {
  try {
    const response = await fetch('/api/person');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    document.querySelector('.logo').textContent = data.name;
    document.querySelector('.hero-copy .eyebrow').textContent = data.hero.eyebrow;
    document.querySelector('.hero-copy h1').textContent = data.name;
    document.querySelector('.hero-copy p').textContent = data.hero.description;
    document.querySelector('.hero-image img').src = data.hero.image;
    document.querySelector('.hero-image img').alt = data.hero.alt;

    document.querySelector('#about .section-heading p').textContent = `About ${data.name}`;
    document.querySelector('#about .section-heading h2').textContent = data.about.title;
    document.querySelector('#about .intro-text p').textContent = data.about.description;

    const stats = document.querySelectorAll('#about .intro-stats div');
    stats.forEach((stat, index) => {
      if (data.about.stats[index]) {
        stat.querySelector('span').textContent = data.about.stats[index].value;
        stat.querySelector('p').textContent = data.about.stats[index].label;
      }
    });

    const cardsSection = document.querySelector('.cards');
    cardsSection.innerHTML = data.sections
      .map(
        (section) => `
      <article class="card reveal">
        <h3>${section.title}</h3>
        <p>${section.text}</p>
      </article>`
      )
      .join('');

    const timelineContainer = document.querySelector('.timeline ol');
    timelineContainer.innerHTML = data.timeline
      .map(
        (event) => `
      <li>
        <span>${event.year}</span>
        <p>${event.text}</p>
      </li>`
      )
      .join('');

    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = data.gallery
      .map(
        (item) => `
      <figure class="gallery-item reveal">
        <img src="${item.src}" alt="${item.alt}" />
        <figcaption>${item.caption}</figcaption>
      </figure>`
      )
      .join('');

    revealElements = document.querySelectorAll('.reveal');
    revealOnScroll();
  } catch (error) {
    console.error('Failed to load tribute data:', error);
  }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
  loadPageData();
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
  heroImage.addEventListener('mouseenter', () => {
    heroImage.style.transform = 'scale(1.03)';
  });
  heroImage.addEventListener('mouseleave', () => {
    heroImage.style.transform = 'scale(1)';
  });
}
