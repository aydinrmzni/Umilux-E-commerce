import {centToDollar} from './math.js';

/* Save product item element and return the HTML */
export const productHTML = (product, productDetails, productStarsHTML, discountPercent) => {
  let sliderItemsHTML = `
    <div class="list-slider__item ${product.discounted && 'list-slider__item--discounted'} list-slider__item--amazing splide__slide d-flex flex-dir-column justify-content-space-between align-items-center p-1">
      <div class="hovering-menu">
        <ul class="hovering-menu__list d-flex flex-dir-column justify-content-space-between align-content-center">
          <li class="hovering-menu__item d-flex justify-content-center align-items-center">
            <a href="#" class="hovering-menu__link d-flex justify-content-center align-items-center w-100 h-100"><i class="fa-regular fa-heart"></i></a>
          </li>
          <li class="hovering-menu__item d-flex justify-content-center align-items-center">
            <a href="#" class="hovering-menu__link d-flex justify-content-center align-items-center w-100 h-100"><i class="fa-regular fa-clone"></i></a>
          </li>
          <li class="hovering-menu__item d-flex justify-content-center align-items-center">
            <a href="#" class="hovering-menu__link d-flex justify-content-center align-items-center w-100 h-100"><i class="fa-regular fa-eye"></i></a>
          </li>
          <li class="hovering-menu__item d-flex justify-content-center align-items-center">
            <a href="#" class="hovering-menu__link d-flex justify-content-center align-items-center w-100 h-100"><i class="fa-regular fa-square-plus"></i></a>
          </li>
        </ul>
      </div>
      <div class="list-slider__discount-percent">-${discountPercent}%</div>
      <div class="list-slider__thumbnail-wraper w-100">
        <img src="${productDetails.images[0].imageUrl}" alt="${productDetails.images[0].description}" srcset="" class="list-slider__thumbnail-front" />
        <img src="${productDetails.images[1].imageUrl}" alt="${productDetails.images[1].description}" srcset="" class="list-slider__thumbnail-back" />
      </div>
      <div class="list-slider__details-wraper d-flex flex-dir-column justify-content-flex-start align-items-flex-start w-100">
        <a href="" class="list-slider__item-category d-block w-100">${productDetails.categories.map((categorie) => categorie.name).join(', ')}</a>
        <h3 class="list-slider__item-title">${product.name}</h3>
        <div class="list-slider__rating">${productStarsHTML}</div>
        <div class="list-slider__price-wraper">
          <span class="list-slider__current-price">$${centToDollar(product.discountedPriceCents)}</span>
          <span class="list-slider__old-price">$${centToDollar(product.priceCents)}</span>
        </div>
      </div>
    </div>
    `;

  return sliderItemsHTML;
};
