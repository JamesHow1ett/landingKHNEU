const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('goToTop');
const navBar = document.getElementById('nav-bar');
const iconBar = document.getElementById('icon-bar');

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

window.onscroll = () => {
  addStickyClass();
  scrollFunction();
}

const scrollFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const addStickyClass = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    iconBar.classList.add("icon-bar-sticky");
  } else {
    iconBar.classList.remove("icon-bar-sticky");
    iconBar.style.display = "none";
  }
}

const phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{38}(000)000-00-00'
  });