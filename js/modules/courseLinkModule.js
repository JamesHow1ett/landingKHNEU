import {coursesMap} from '../data/courseMap.js';


//get dataset and create correct link
export const createLinkCard = nodeList => {
  nodeList.forEach((index) => {
    index.addEventListener('click', event => {
      const target = event.target;
      const key = target.dataset.category;
      location.href = coursesMap.get(key);
    });
  });
}