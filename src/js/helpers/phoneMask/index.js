import { isNaN } from '../../utils/inspect';

/**
 * Create a new phone mask instance
 * @class
 * @constructor
 * @public
 */
class PhoneMask {
  /**
   * @param {String} selector - HTML Element selector
   * @param {String} mask
   */
  constructor(selectorId, mask) {
    this.element = document.getElementById(`${selectorId}`);
    this.originalMask = mask;
    this.mask = mask;
    this.finalValue = '';
    this.#setUp();
  }

  /**
   * Remove X from mask
   * @param {String} mask
   * @param {String} value
   * @returns {String}
   */
  static #parseMask = (mask, value) => mask.replace('X', value);

  #setUp() {
    // this.element
    this.element.placeholder = this.mask;
    this.element.addEventListener('input', this.#inputListener.bind(this));
    this.element.addEventListener('blur', this.#blurListener.bind(this));
  }

  /**
   * Check is phone was filled
   * @param {String} value
   * @returns {Boolean}
   */
  #isPhoneFilled(value) {
    const sameLength = this.originalMask.length === value.length;
    const hasX = /x/i.test(value);

    return sameLength && !hasX;
  }

  /**
   * @param {Event} event
   */
  #inputListener({ target }) {
    const lastItem = target.value.split('')[target.value.length - 1];

    if (!isNaN(lastItem)) {
      const newValue = PhoneMask.#parseMask(this.mask, lastItem);
      this.element.value = newValue;
      this.mask = newValue;

      if (this.#isPhoneFilled(newValue)) {
        this.finalValue = newValue;
      }
    } else {
      console.log(target.value);
    }
  }

  /**
   * @param {Event} event
   */
  #blurListener() {
    this.element.value = this.finalValue;
  }

  destroy() {
    this.mask = this.originalMask;
    this.element.placeholder = this.originalMask;
    this.element.value = '';
    this.element.removeEventListener('input', this.#inputListener);
    this.element.addEventListener('blur', this.#blurListener);
  }
}

export default PhoneMask;
