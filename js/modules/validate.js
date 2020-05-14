const nameRegExp = new RegExp("^[a-zа-яА-ЯёЁЇїІіЄєҐґ-]+$");
const emailRegExp = new RegExp("^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$");

export const validateForm = (event) => {
  const target = event.target;
  const key = target.getAttribute('id');
  switch(key) {
    case 'name':
      isValid((target.value), target, nameRegExp);
      break;
    case 'surname':
      isValid((target.value), target, nameRegExp);
      break;
    case 'email':
      isValid((target.value), target, emailRegExp);
      break;
  }
}

const isValid = (value, elem, type) => {
  const res = type.exec(value);
  console.log(elem);
  if (res) {
    elem.classList.remove('form__input_invalid');
    elem.classList.add('form__input_valid');
  } else {
    elem.classList.remove('form__input_valid');
    elem.classList.add('form__input_invalid');
  }
}