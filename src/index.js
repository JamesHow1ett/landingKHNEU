import { init, showGoToTopButton, showStickyNavbar } from './js';

import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

document.addEventListener('scroll', () => {
  showGoToTopButton();
  showStickyNavbar();
});
