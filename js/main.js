const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('goToTop');
const navBar = document.getElementById('nav-bar');
const iconBar = document.getElementById('icon-bar');
const aboutCard = document.querySelectorAll('div.about-card');

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
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const addStickyClass = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    iconBar.classList.add("icon-bar-sticky");
  } else {
    iconBar.classList.remove("icon-bar-sticky");
    iconBar.style.display = "none";
  }
};

const phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{38}(000)000-00-00'
  });


const aboutCardLikeLink = () => {
  for (let i = 0; i < aboutCard.length; i++) {
    aboutCard[i].onmouseout = () => {
      aboutCard[i].style.background = '';
    }
    aboutCard[i].onmouseover = () => {
      aboutCard[i].style.cursor = 'pointer';
      aboutCard[i].style.transition = 'all 1s ease';
      aboutCard[i].style.background = 'rgba(0, 120, 201, 0.7)';
    }
  }
}

document.getElementById('online').addEventListener('click', () => {
  location.href = 'https://online.hneu.edu.ua/'
}, false);
document.getElementById('language').addEventListener('click', () => {
  location.href = 'https://docs.google.com/forms/d/1E0dxJgdGLIkMb6GANqCHI_HMMTH1iDu_nO_fNkPUExk/viewform?ts=5dcdd5f1&edit_requested=true'
}, false);
document.getElementById('robot').addEventListener('click', () => {
  location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScHMsJxJEp7mTqbay10gtTVnFS2EKQ7bcLG9HM_Pyvk3yiApw/viewform'
}, false);
document.getElementById('zno').addEventListener('click', () => {
  location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScuDl9k0k8HEAsrJLCH0PloVrfqopcmG5G-SDh37p_QsBSPig/viewform'
}, false);

aboutCardLikeLink();