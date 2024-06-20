import {toggleShowCart} from '../views/cartpop.js';
import {getProductById} from './product.js';
import {centToDollar} from '../utils/math.js';

export const Cart = []; /* Store items in the Cart */

const listSliderItemsElm = document.querySelectorAll('.list-slider__items');
const cartQuantityElm = document.querySelector('.js-cart-quantity');
const cartPopHeadingElm = document.querySelector('.cartpop__heading-js');
const cartPopItemsElm = document.querySelector('.cartpop__items-js');

/* When clicked on add to cart button */
listSliderItemsElm.forEach((elm) => {
  elm.addEventListener('click', (e) => {
    // Push added item to the Cart
    addToCart(e);

    // Return Cart quantity
    const cartQuantity = getCartQuantity(Cart);

    // Render Cart quantity
    renderCartQuantity(cartQuantity);

    // Get items in Cart
    const cartItems = getItemsInCart(Cart);

    // Render items in cartpop
    renderItemsInCartPop(cartItems);
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

/* Get products in the Cart */
const getItemsInCart = (Cart) => {
  let itemsInCart = [];
  Cart.forEach((item) => {
    itemsInCart.push(item);
  });
  return itemsInCart;
};

/* Render Cart quantity */
const renderItemsInCartPop = (itemsInCart) => {
  let cartpopItemsHTML = ''; // Store cart items HTML
  console.log(itemsInCart);
  itemsInCart.forEach((item) => {
    const itemDetails = getProductById(item.productid); // Store product details in matchingItem
    cartpopItemsHTML += `
      <div class="cartpop__item d-flex gap-1">
        <div class="cartpop__image-wraper d-flex"><img src='${itemDetails.images[0].imageUrl}' alt="" srcset="" class="cartpop__image" /></div>
        <div class="cartpop__details d-flex flex-dir-column justify-content-space-between">
          <span class="cartpop__name">${itemDetails.product.name}</span>
          <div class="d-flex justify-content-flex-start">
            <span class="cartpop__price">$
              ${itemDetails.product.discounted ? centToDollar(itemDetails.product.discountedPriceCents) : centToDollar(itemDetails.product.priceCents)}
            </span>
            <span class="cartpop__quantity">[${item.quantity}]</span>
          </div>
        </div>
        <div class="cartpop__modify">
          <i class="fa fa-trash cartpop__remove-js"></i>
        </div>
      </div>
    `;
  });
  cartPopItemsElm.innerHTML = cartpopItemsHTML; // Render cart items
};
