import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


const button = document.querySelector('.about-us__button');
const text = document.querySelector('.about-us__text');
button.onclick = function () {
  text.classList.toggle('is-active');
  button.innerHTML =
    (button.innerHTML === 'Подробнее') ? button.innerHTML = 'Свернуть' : button.innerHTML = 'Подробнее';
};


const contacts = document.querySelector('.footer-contacts');
const contactsBtn = document.querySelector('.footer-contacts__title');
const siteList = document.querySelector('.site-list');
const siteListBtn = document.querySelector('.site-list__title');

contactsBtn.onclick = function () {
  contacts.classList.toggle('is-active');
  siteList.classList.remove('is-active');
};

siteListBtn.onclick = function () {
  siteList.classList.toggle('is-active');
  contacts.classList.remove('is-active');
};

