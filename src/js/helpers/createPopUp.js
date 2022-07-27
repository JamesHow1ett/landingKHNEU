/**
 * @typedef ActionsCbs
 * @property {() => void} cancel
 * @property {() => void} confirm
 */

/**
 * @typedef CreatePopupWindowOptions
 * @property {String | Number} width
 * @property {String | Number} height
 * @property {String | undefined} title
 * @property {String | undefined} text
 * @property {ActionsCbs | undefined} actions
 */

/**
 * @type {CreatePopupWindowOptions}
 */
const DEFAULT_POPUP_WINDOW_OPTIONS = {
  height: 300,
  width: 600,
  title: 'title',
  text: 'text',
};

const noop = () => {};

/**
 * Function call destroy method on wrapper if clicked outside of popup
 * @param {Event} event
 */
function popupOutsideClickHandler(event) {
  if (this === event.target) {
    this.destroy();
  }
}

/**
 * Function what called on popup actions click
 * @param {Function} cb - Provided callback function to call after click popup actions
 */
function actionFn(cb = noop) {
  this.destroy();
  cb();
}

/**
 * Create popup window header block
 * @param {String} title
 * @param {HTMLElement} popup - The popup parent element
 * @returns {HTMLElement}
 */
function generatePopupHeader(popup, title) {
  const popHeader = document.createElement('div');
  popHeader.classList.add('popup-menu__header');

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header__title');

  const titleElem = document.createElement('h2');
  titleElem.textContent = title;

  const closeHeaderBtn = document.createElement('button');
  closeHeaderBtn.innerHTML = '<i class="fas fa-times fa-s"></i>';
  closeHeaderBtn.classList.add('header__btn');
  closeHeaderBtn.addEventListener('click', actionFn.bind(popup, noop));

  headerTitle.append(titleElem);
  popHeader.append(headerTitle);
  popHeader.append(closeHeaderBtn);

  return popHeader;
}

/**
 * Creare popup window body block
 * @param {String} text
 * @returns {HTMLElement}
 */
function generatePopupBody(text) {
  const body = document.createElement('div');
  body.classList.add('popup-menu__body');

  const span = document.createElement('span');
  span.innerHTML = text;

  body.append(span);

  return body;
}

/**
 * Creare popup window actions block
 * @param {ActionsCbs} actions
 * @param {HTMLElement} popup - The popup parent element
 * @returns {HTMLElement}
 */
function generatePopupActions(popup, actions = {}) {
  const actionsRow = document.createElement('div');
  actionsRow.classList.add('popup-menu__actions');

  if (actions.cancel) {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', actionFn.bind(popup, actions.cancel));

    actionsRow.append(cancelBtn);
  }

  if (actions.confirm) {
    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', actionFn.bind(popup, actions.confirm));

    actionsRow.append(confirmBtn);
  }

  if (!actions.cancel && !actions.confirm) {
    const defaultButton = document.createElement('button');
    defaultButton.classList.add('confirm');
    defaultButton.textContent = 'Ok';
    defaultButton.addEventListener('click', actionFn.bind(popup, noop));

    actionsRow.append(defaultButton);
  }

  return actionsRow;
}

/**
 * Create a popup menu
 * @param {CreatePopupWindowOptions} options
 * @param {HTMLElement} wrapper - The popup wrapper
 * @returns {HTMLElement} The popup menu
 */
function generatePopupMenu(wrapper, options) {
  const popMenu = document.createElement('div');
  popMenu.classList.add('popup-menu');
  popMenu.style.width = `${options.width}px`;
  popMenu.style.height = `${options.height}px`;

  const popupHeader = generatePopupHeader(wrapper, options.title);
  const popupBody = generatePopupBody(options.text);
  const popupActions = generatePopupActions(wrapper, options?.actions);

  popMenu.append(popupHeader);
  popMenu.append(popupBody);
  popMenu.append(popupActions);

  return popMenu;
}

/**
 * Create a new pop up window
 * @param {HTMLElement} parent
 * @param {CreatePopupWindowOptions} options
 * @returns {{destroy: () => void}} method for force destroy popup
 */
export function createPopUpMenu(parent, options = {}) {
  const mergeOptions = {
    ...DEFAULT_POPUP_WINDOW_OPTIONS,
    ...options,
  };

  // prevent scrolling page until close popup menu
  document.body.style.overflow = 'hidden';

  const wrapperTop = document.documentElement.scrollTop;

  const wrapper = document.createElement('div');
  wrapper.classList.add('popup-wrapper');
  wrapper.style.top = `${wrapperTop}px`;
  wrapper.destroy = () => {
    wrapper.removeEventListener('click', popupOutsideClickHandler);
    document.body.style.overflow = 'auto';
    wrapper.remove();
  };

  const popupMenu = generatePopupMenu(wrapper, mergeOptions);

  wrapper.append(popupMenu);

  wrapper.addEventListener('click', popupOutsideClickHandler);

  parent.append(wrapper);

  return {
    destroy: wrapper.destroy,
  };
}
