//declare const's
const anchors = document.querySelectorAll('a[href*="#"]');
const goToTopButton = document.getElementById('goToTop');
const navBar = document.getElementById('nav-bar');
const iconBar = document.getElementById('icon-bar');
const aboutCard = document.querySelectorAll('div.about-card');
const socialButtons = document.querySelectorAll('footer.footer > div.footer-info > .footer-links > .footer__links > a');


//scroll our page by nav link's
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

const scrollFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
};


//goTop button
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


//do our nav sticky
const addStickyClass = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    iconBar.classList.add("icon-bar-sticky");
  } else {
    iconBar.classList.remove("icon-bar-sticky");
    iconBar.style.display = "none";
  }
};


//phone mask for our registration form
const phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{38}(000)000-00-00'
  });


//hover effect for div in aboutSection
const hoverCards = () => {
  for (let i = 0; i < aboutCard.length; i++) {
    aboutCard[i].onmouseout = () => {
      aboutCard[i].style.background = '';
    }
    aboutCard[i].onmouseover = () => {
      if (i === 1 || i === 2) {
        aboutCard[i].style.cssText = 'cursor: pointer; transition: all 1s ease-out; background: rgba(171, 137, 218, 0.7);';
      } else {
        aboutCard[i].style.cssText = 'cursor: pointer; transition: all 1s ease; background: rgba(0, 120, 201, 0.7);';
      }
    }
  }
}


//get dataset and create correct link
const createLinkCard = nodeList => {
  nodeList.forEach((index) => {
    index.addEventListener('click', event => {
      const target = event.target;
      const key = target.dataset.category;

      switch (key) {
        case 'online':
          location.href = 'https://online.hneu.edu.ua/';
          break;
        case 'language':
          location.href = 'https://docs.google.com/forms/d/1E0dxJgdGLIkMb6GANqCHI_HMMTH1iDu_nO_fNkPUExk/viewform?ts=5dcdd5f1&edit_requested=true';
          break;
        case 'robot':
          location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScHMsJxJEp7mTqbay10gtTVnFS2EKQ7bcLG9HM_Pyvk3yiApw/viewform';
          break;
        case 'zno':
          location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScuDl9k0k8HEAsrJLCH0PloVrfqopcmG5G-SDh37p_QsBSPig/viewform';
          break;
      }
    });
  });
}



//initiation function
const init = () => {
  window.onscroll = () => {
    addStickyClass();
    scrollFunction();
  }
  hoverCards();
  createLinkCard(aboutCard);
}

init();