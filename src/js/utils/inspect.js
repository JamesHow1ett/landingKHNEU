/**
 * @returns type of the value
 */
export const toType = (value) => typeof value;

/**
   * @returns {Boolean} returns true if value is an array
   */
export const isArray = (value) => Array.isArray(value);

/**
   * @returns {Boolean} returns true if value is a null
   */
export const isNull = (value) => value === null;

/**
   * @returns {Boolean} returns true if value is a undefined
   */
export const isUndefined = (value) => value === undefined;

/**
   * @returns {Boolean} return true if passed Non a number value
   */
export const isNaN = (value) => Number.isNaN(Number(value));

/**
   * @returns {Boolean} returns true if passed object as param
   */
export const isObject = (value) => Object.prototype.toString.apply(value) === '[object Object]';

/**
   * @param {Number} index
   * @returns {Boolean} returns true if index is number and more or quals then 0
   */
export const isValidIndex = (index) => toType(index) === 'number'
    && Number.isInteger(index)
    && index >= 0;

/**
   * @returns {Boolean} returns true if passed empty object
   */
export const isEmptyObject = (object) => {
  if (!isObject(object)) {
    return false;
  }

  const isNoEmpty = Boolean(Object.keys(object).length);

  return !isNoEmpty;
};

/**
   * @param {String} url
   * @returns {Boolean} returns true if passed url
   */
export const isUrl = (url) => {
  const urlRegexp = /^http|s:\/\//g;

  return urlRegexp.test(url);
};

/**
   * @param {Number} value
   * @returns {Boolean} return true if passed value is odd
   */
export const isEven = (value) => value % 2 === 0;

/**
   * @typedef {Object} Pagination
   * @property {Number} number - The current page of the data, start from 0
   * @property {Number} size - The amount of the receiving data items
   * @property {Number} totalPages - The total number of the possible pages
   */
/**
   * @param {Pagination} pagination - pagination object
   * @returns {Boolean} true if pagination has every needed field
   */
export const isPaginationObject = (pagination) => {
  const paginationFields = ['number', 'size', 'totalPages'];

  if (!isObject(pagination)) {
    return false;
  }

  return paginationFields.every((key) => Object.keys(pagination).includes(key));
};

/**
   * @param {Object} object
   * @param {String|Number|Null|Undefined} [comparatorValue = '']
   * @returns {Boolean} returns true if all fields have a value that passed in the second arg
   * default comparing to the empty string
   */
export const isEveryObjectFieldSameValue = (object, comparatorValue = '') => {
  if (!isObject(object)) {
    return false;
  }

  return Object.values(object).every((v) => v === comparatorValue);
};
