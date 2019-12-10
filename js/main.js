const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('goToTop')

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
  scrollFunction()
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