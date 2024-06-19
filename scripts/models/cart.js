import {toggleShowCart} from '../views/cartpop.js';

export const Cart = []; /* Store items in the Cart */

const listSliderItemsElm = document.querySelectorAll('.list-slider__items');
const cartQuantityElm = document.querySelector('.js-cart-quantity');
const cartPopHeadingElm = document.querySelector('.cartpop__heading-js');

/* When clicked on add to cart button */
listSliderItemsElm.forEach((elm) => {
  elm.addEventListener('click', (e) => {
    // Push added item to the Cart
    addToCart(e);

    // Return Cart quantity
    const cartQuantity = getCartQuantity(Cart);

    // Render Cart quantity
    renderCartQuantity(cartQuantity);

    console.log(Cart);
  });
});

// Push added item to the Cart
const addToCart = (e) => {
  if (e.target.classList.contains('add-to-cart-js')) {
    const addToCartButtonElm = e.target;
    const productid = addToCartButtonElm.dataset.id;
    let itemExist; /* True means item is already in the Cart */

    if (Cart.length == 0) {
      /* If the Cart was empty */
      Cart.push({productid, quantity: 1});
      toggleShowCart();
    } else {
      Cart.forEach((item) => {
        if (item.productid == productid) {
          /* If item was already in the Cart */
          item.quantity++;
          toggleShowCart();
          itemExist = true;
        }
      });
      if (!itemExist) {
        /* If item was not in the Cart */
        Cart.push({productid, quantity: 1});
        toggleShowCart();
        itemExist = false;
      }
    }
  }
};

/* Return Cart quantity */
const getCartQuantity = (Cart) => {
  let cartQuantity = 0; /* Store the Cart quantity */

  Cart.forEach((item) => {
    cartQuantity += item.quantity; /* Summary of item quantity */
  });

  return cartQuantity; /* Return Cart quantity */
};

/* Render Cart quantity */
const renderCartQuantity = (cartQuantity) => {
  if (cartQuantity > 99) {
    cartQuantityElm.innerHTML = '99';
    cartPopHeadingElm.innerHTML = `Shoping Cart (99+)`;
  } else {
    cartQuantityElm.innerHTML = cartQuantity;
    cartPopHeadingElm.innerHTML = `Shoping Cart (${cartQuantity})`;
  }
};

/* Render Cart quantity */
const renderItemsInCartPop = () => {
  
};
