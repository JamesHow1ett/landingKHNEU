//declare const's
//import {body,anchors, goToTopButton, navBar, iconBar, aboutCard, socialButtons, footerInfo} from './data/consts.js';
import * as domElem from './data/consts.js';
import {createLinkCard} from './modules/courseLinkModule.js';

//scroll our page by nav link's
for (let anchor of domElem.anchors) {
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
    domElem.goToTopButton.style.display = "block";
  } else {
    domElem.goToTopButton.style.display = "none";
  }
};


//goTop button
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};


//do our nav sticky
const addStickyClass = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    domElem.iconBar.classList.add("icon-bar-sticky");
  } else {
    domElem.iconBar.classList.remove("icon-bar-sticky");
    domElem.iconBar.style.display = "none";
  }
};


//phone mask for our registration form
const phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{38}(000)000-00-00'
  });


//hover effect for div in aboutSection
const hoverCards = () => {
  for (let i = 0; i < domElem.aboutCard.length; i++) {
    domElem.aboutCard[i].onmouseout = () => {
      domElem.aboutCard[i].style.background = '';
    }
    domElem.aboutCard[i].onmouseover = () => {
      if (i === 1 || i === 2) {
        domElem.aboutCard[i].style.cssText = 'cursor: pointer; transition: all 1s ease-out; background: rgba(171, 137, 218, 0.7);';
      } else {
        domElem.aboutCard[i].style.cssText = 'cursor: pointer; transition: all 1s ease; background: rgba(0, 120, 201, 0.7);';
      }
    }
  }
}


//
const spaceMyName = () => {
  const spans = document.querySelectorAll('.footer-sign__link > span');
  spans.forEach((index) => {
    if (index.id === '8' || index.id === '11' || index.id === '20') {
      index.style.cssText = 'display: inline-block; width: 5px;';
    }
  });
}


//
const underLine = (event) => {
  const target = event.target;
  const haveData = target.dataset;
  const sign = target.dataset.sign;
  const caption = document.querySelector('.footer-links-caption');
  const signLink = document.querySelector('.footer-sign__link');

  if (haveData) {
    if (haveData.social) {
      caption.style.cssText = 'text-decoration: underline;';
    } else {
      caption.style.textDecoration = 'none';
    }

    if (sign) {
      signLink.style.cssText = 'text-decoration: underline; transition: all 0.3s linear; color: #0000ff;'
    } else {
      signLink.style.cssText = '';
    }

  }
}


//initiation function
const init = () => {
  window.onscroll = () => {
    addStickyClass();
    scrollFunction();
  }
  hoverCards();
  createLinkCard(domElem.aboutCard);
  //spaceMyName();
  domElem.goToTopButton.addEventListener('click', goToTop);
  domElem.footerInfo.addEventListener('mousemove', () => {
    underLine(event);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});