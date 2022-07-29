import validators from '../utils/validators';

const doNotValidate = () => true;

/**
 * Apply validation function to passed fields
 * @param {HTMLElement[]} fields - fields to validate
 * @returns {Boolean} return true if all fields will pass the validation function
 * @thows Error if some of fields is NOT valid
 */
export function validateFormInputs(fields) {
  let isValid = true;

  fields.forEach((field) => {
    /**
     * @type {(value: String) => Boolean}
     */
    const validator = field.dataset.validType
      ? validators[field.dataset.validType]
      : doNotValidate;

    if (validator(field.value)) {
      field.classList.remove('invalid');
      field.classList.add('valid');
    } else {
      isValid = false;
      field.classList.remove('valid');
      field.classList.add('invalid');
    }
  });

  if (!isValid) {
    throw new Error('Invalid fields');
  }

  return isValid;
}
