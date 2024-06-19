import {toggleShowCart} from '../views/cartpop.js';

export const Cart = []; // Store items in the cart

const listSliderItemsElm = document.querySelectorAll('.list-slider__items');

// When clicked on add to cart button
listSliderItemsElm.forEach((elm) => {
  elm.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-js')) {
      const addToCartButtonElm = e.target;
      const productid = addToCartButtonElm.dataset.id;
      let itemExist; // True means item is already in the cart

      if (Cart.length == 0) { // If the cart was empty
        Cart.push({productid, quantity: 1});
        toggleShowCart();
      } else {
        Cart.forEach((item) => {
          if (item.productid == productid) { // If item was already in the cart
            item.quantity++;
            toggleShowCart();
            itemExist = true;
          }
        });
        if (!itemExist) { // If item was not in the cart
          Cart.push({productid, quantity: 1});
          toggleShowCart();
          itemExist = false;
        }
      }
      console.log(Cart);
    }
  });
});
