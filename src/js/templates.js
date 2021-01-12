import itemsTemplate from '../templates/menu.hbs';
import menuList from '../menu.json'

const markUp = itemsTemplate(menuList);

// console.log(markUp);

const ulmenuRef = document.querySelector('.js-menu');

ulmenuRef.insertAdjacentHTML('beforeend', markUp);