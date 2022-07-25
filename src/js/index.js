import { SOURCE_URLS } from './utils/constants';
import { registrationFormHandler } from './toMail';

// DOM Elements
const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('go-to-top');
const iconBar = document.getElementById('icon-bar');
const aboutCard = document.querySelectorAll('div.about-card');
const footerInfo = document.querySelector('.footer-info');
const registationForm = document.getElementById('register-form');

/**
 * Add listeners for anchors lick
 * @param {NodeListOf<Element>} listOfAnchors
 * @returns {void}
 */
function anchorClick(listOfAnchors) {
  listOfAnchors.forEach((anchor) => {
    anchor.addEventListener('click', ({ preventDefault }) => {
      preventDefault();

      const blockID = anchor.getAttribute('href') ?? '';
      document.querySelector(`${blockID}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

/**
 * Scroll page to the top
 */
function goToTop() {
  document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export const showGoToTopButton = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopButton.style.display = 'block';
    goToTopButton.addEventListener('click', goToTop);
  } else {
    goToTopButton.style.display = 'none';
    goToTopButton.removeEventListener('click', goToTop);
  }
};

/**
 * Show stick navbar after user scroll the page
 */
export const showStickyNavbar = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    iconBar.classList.add('icon-bar-sticky');
  } else {
    iconBar.classList.remove('icon-bar-sticky');
    iconBar.style.display = 'none';
  }
};

// TODO: Handle by css
const hoverCards = () => {
  for (let i = 0; i < aboutCard.length; i += 1) {
    aboutCard[i].onmouseout = () => {
      aboutCard[i].style.background = '';
    };
    aboutCard[i].onmouseover = () => {
      if (i === 1 || i === 2) {
        aboutCard[i].style.cssText = `
          cursor: pointer; transition: all 1s ease-out; background: rgba(171, 137, 218, 0.7);
        `;
      } else {
        aboutCard[i].style.cssText = `
          cursor: pointer; transition: all 1s ease; background: rgba(0, 120, 201, 0.7);
        `;
      }
    };
  }
};

function openSourceUrl() {
  const { category } = this.dataset;
  window.open(SOURCE_URLS[category], '_blank');
}

const createLinkCard = () => {
  aboutCard.forEach((item) => {
    item.addEventListener('click', openSourceUrl);
  });
};

// TODO: handle by css
const underLine = ({ target }) => {
  const { sign, social } = target.dataset;
  const caption = document.querySelector('.footer-links-caption');
  const signLink = document.querySelector('.footer-sign__link');

  if (social) {
    caption.style.cssText = 'text-decoration: underline;';
  } else {
    caption.style.textDecoration = 'none';
  }

  if (sign) {
    signLink.style.cssText = `
        text-decoration: underline; transition: all 0.3s linear; color: #0000ff;
      `;
  } else {
    signLink.style.cssText = '';
  }
};

/**
 * Add listenets after DOMContentLoaded
 */
export const init = () => {
  hoverCards();
  createLinkCard();
  anchorClick(anchors);

  footerInfo.addEventListener('mousemove', (event) => {
    underLine(event);
  });

  registationForm.addEventListener('submit', registrationFormHandler);
};
