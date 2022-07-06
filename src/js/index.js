// DOM Elements
const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('goToTop');
const navBar = document.getElementById('nav-bar');
const iconBar = document.getElementById('icon-bar');
const aboutCard = document.querySelectorAll('div.about-card');
const socialButtons = document.querySelectorAll('footer.footer > div.footer-info > .footer-links > .footer__links > a');
const footerInfo = document.querySelector('.footer-info');

// 
for (let anchor of anchors) {
  anchor.addEventListener("click", event => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
