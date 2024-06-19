const cartButtonElm = document.querySelector('.js-cart-button'); /* Cart box icon element */
const cartPopElm = document.querySelector('.cartpop-js'); /* Cartpop element */
const ovelayElm = document.querySelector('.overlay'); /* Overlay element */

cartButtonElm &&
  cartButtonElm.addEventListener('click', (e) => {
    toggleShowCart();
  });

ovelayElm &&
  ovelayElm.addEventListener('click', (e) => {
    toggleShowCart();
  });

export function toggleOverlay() {
  ovelayElm.classList.toggle('show');
}
export function toggleCartpop() {
  cartPopElm.classList.toggle('show');
}

export function toggleShowCart() {
  toggleCartpop();
  toggleOverlay();
}
