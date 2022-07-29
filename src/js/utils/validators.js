/**
 * Check if field filled
 * @param {String} value
 * @returns {Boolean} returns true if field filled
 */
const required = (value) => value.trim().length > 0;

/**
 * Check if field value in email format
 * @param {String} value
 * @returns {Boolean} returns true if email format
 */
const emailFormat = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(value.trim());
};

/**
 * Check if field value can be use as strong password
 * @param {String} value
 * @returns {Boolean} returns true if value is strong password
 */
const strongPassword = (value) => {
  const strongLength = value.trim().length > 6;
  const hasCapitalsAndSymbols = /[A-Z][!-_]/.test(value.trim());

  return strongLength && hasCapitalsAndSymbols;
};

export default {
  required,
  email: emailFormat,
  password: strongPassword,
};
