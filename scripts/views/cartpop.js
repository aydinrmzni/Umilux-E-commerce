const cartButtonElm = document.querySelector('.js-cart-button'); /* Cart box icon element */
const cartPopElm = document.querySelector('.cartpop-js'); /* Cartpop element */
const ovelayElm = document.querySelector('.overlay'); /* Overlay element */

cartButtonElm &&
  cartButtonElm.addEventListener('click', (e) => {
    ovelayElm.classList.toggle('show');
    cartPopElm.classList.toggle('show');
  });

ovelayElm &&
  ovelayElm.addEventListener('click', (e) => {
    cartPopElm.classList.toggle('show');
    ovelayElm.classList.toggle('show');
  });
