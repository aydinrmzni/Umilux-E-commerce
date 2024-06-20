import {getProdcutAttributes} from './attribute.js';
import {getBrandById} from './brand.js';
import {getCategorieById} from './categorie.js';
import {getProductImageById} from './image.js';
import {getProductReviewById} from './review.js';
import {getProductTagById} from './tag.js';
import {getAvgRating, getDiscountPercent} from '../utils/math.js';
import {productHTML} from '../utils/productHTML.js';
import {Cart} from './cart.js';

const listSliderItemsElm = document.querySelector('.js-list-slider__items');

/* Products JSON */
const Product = [
  {
    id: '1a9f33bb-75d4-4bda-b9d0-3fb1f98e9b02',
    name: 'Samsung Galaxy S21 Ultra 5G 256GB Phantom Black - Unlocked',
    description: 'Description of Samsung Galaxy S21 Ultra 5G 256GB Phantom Black - Unlocked',
    priceCents: 140000,
    discountedPriceCents: 125000,
    categoryIds: [2],
    brandIds: [1],
    availability: true,
    trending: true,
    imageIds: [0, 1], // Images for this product
    reviewIds: [0, 1, 2, 3],
    tagIds: [2, 3],
    weight: 1.2,
    dimensions: {
      length: 15,
      width: 9,
      height: 2,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Phantom Black'],
      },
      {
        attributeId: 1,
        values: ['256GB'],
      },
      {
        attributeId: 2,
        values: ['12GB'],
      },
      {
        attributeId: 3,
        values: ['5000mAh'],
      },
      {
        attributeId: 4,
        values: ['6.8 inches'],
      },
    ],
    discounted: false,
  },
  {
    id: '3d84c635-cf49-4d8e-9069-2f4b432c0b5b',
    name: 'Google Pixel 6 Pro 5G 128GB Cloudy White - Unlocked',
    description: 'Description of Google Pixel 6 Pro 5G 128GB Cloudy White - Unlocked',
    priceCents: 120000,
    discountedPriceCents: 105000,
    categoryIds: [3],
    brandIds: [2],
    availability: false,
    trending: false,
    imageIds: [2, 3], // Images for this product
    reviewIds: [4, 5, 6, 7],
    tagIds: [4, 5],
    weight: 1.1,
    dimensions: {
      length: 14,
      width: 8,
      height: 2.5,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Cloudy White'],
      },
      {
        attributeId: 1,
        values: ['128GB'],
      },
      {
        attributeId: 2,
        values: ['12GB'],
      },
      {
        attributeId: 3,
        values: ['5000mAh'],
      },
      {
        attributeId: 4,
        values: ['6.7 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: '4a55d46c-1c34-4bd7-bf6d-7f67a5f2a915',
    name: 'OnePlus 9 Pro 5G 256GB Pine Green - Unlocked',
    description: 'Description of OnePlus 9 Pro 5G 256GB Pine Green - Unlocked',
    priceCents: 90000,
    discountedPriceCents: 85000,
    categoryIds: [4],
    brandIds: [3],
    availability: true,
    trending: true,
    imageIds: [4, 5], // Images for this product
    reviewIds: [8, 9, 10, 11],
    tagIds: [6, 7],
    weight: 1.0,
    dimensions: {
      length: 13,
      width: 7,
      height: 2.2,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Pine Green'],
      },
      {
        attributeId: 1,
        values: ['256GB'],
      },
      {
        attributeId: 2,
        values: ['12GB'],
      },
      {
        attributeId: 3,
        values: ['4500mAh'],
      },
      {
        attributeId: 4,
        values: ['6.7 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: '7b36c68a-0f35-4e5e-bd6a-3a8f7f3c6957',
    name: 'Sony Xperia 5 III 128GB Black - Unlocked',
    description: 'Description of Sony Xperia 5 III 128GB Black - Unlocked',
    priceCents: 100000,
    discountedPriceCents: 95000,
    categoryIds: [5],
    brandIds: [4],
    availability: true,
    trending: false,
    imageIds: [6, 7], // Images for this product
    reviewIds: [12, 13, 14, 15],
    tagIds: [8, 9],
    weight: 0.9,
    dimensions: {
      length: 12,
      width: 7,
      height: 2.1,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Black'],
      },
      {
        attributeId: 1,
        values: ['128GB'],
      },
      {
        attributeId: 2,
        values: ['8GB'],
      },
      {
        attributeId: 3,
        values: ['4500mAh'],
      },
      {
        attributeId: 4,
        values: ['6.1 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: '9d02b56d-2fa1-4e4a-94d5-647a23a6f5a7',
    name: 'Xiaomi Mi 11 Ultra 256GB Ceramic White - Unlocked',
    description: 'Description of Xiaomi Mi 11 Ultra 256GB Ceramic White - Unlocked',
    priceCents: 80000,
    discountedPriceCents: 75000,
    categoryIds: [6],
    brandIds: [5],
    availability: true,
    trending: true,
    imageIds: [8, 9], // Images for this product
    reviewIds: [16, 17, 18, 19],
    tagIds: [10, 11],
    weight: 1.3,
    dimensions: {
      length: 15,
      width: 8,
      height: 2.3,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Ceramic White'],
      },
      {
        attributeId: 1,
        values: ['256GB'],
      },
      {
        attributeId: 2,
        values: ['12GB'],
      },
      {
        attributeId: 3,
        values: ['5000mAh'],
      },
      {
        attributeId: 4,
        values: ['6.81 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: 'b1f44c7a-41c6-4dcd-a6e4-d587a93d2a9a',
    name: 'Nokia XR20 128GB Ultra Blue - Unlocked',
    description: 'Description of Nokia XR20 128GB Ultra Blue - Unlocked',
    priceCents: 60000,
    discountedPriceCents: 55000,
    categoryIds: [7],
    brandIds: [6],
    availability: false,
    trending: false,
    imageIds: [10, 11], // Images for this product
    reviewIds: [20, 21, 22, 23],
    tagIds: [12, 13],
    weight: 1.0,
    dimensions: {
      length: 13,
      width: 7,
      height: 2.2,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Ultra Blue'],
      },
      {
        attributeId: 1,
        values: ['128GB'],
      },
      {
        attributeId: 2,
        values: ['6GB'],
      },
      {
        attributeId: 3,
        values: ['4630mAh'],
      },
      {
        attributeId: 4,
        values: ['6.67 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: 'd3e6f78a-65d3-4e6e-96c8-4f75e5c8f7e8',
    name: 'Huawei P40 Pro 5G 256GB Silver Frost - Unlocked',
    description: 'Description of Huawei P40 Pro 5G 256GB Silver Frost - Unlocked',
    priceCents: 70000,
    discountedPriceCents: 65000,
    categoryIds: [9],
    brandIds: [7],
    availability: false,
    trending: true,
    imageIds: [12, 13], // Images for this product
    reviewIds: [24, 25, 26, 27],
    tagIds: [16, 17],
    weight: 1.2,
    dimensions: {
      length: 14,
      width: 7,
      height: 2,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Silver Frost'],
      },
      {
        attributeId: 1,
        values: ['256GB'],
      },
      {
        attributeId: 2,
        values: ['8GB'],
      },
      {
        attributeId: 3,
        values: ['4200mAh'],
      },
      {
        attributeId: 4,
        values: ['6.58 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: 'e7e3f896-0c95-4b9b-95d3-6b9c8f8c7e7e',
    name: 'Oppo Find X3 Pro 256GB Gloss Black - Unlocked',
    description: 'Description of Oppo Find X3 Pro 256GB Gloss Black - Unlocked',
    priceCents: 110000,
    discountedPriceCents: 100000,
    categoryIds: [10],
    brandIds: [8],
    availability: true,
    trending: false,
    imageIds: [14, 15], // Images for this product
    reviewIds: [28, 29, 30, 31],
    tagIds: [18, 19],
    weight: 1.2,
    dimensions: {
      length: 14,
      width: 7.5,
      height: 2.3,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Gloss Black'],
      },
      {
        attributeId: 1,
        values: ['256GB'],
      },
      {
        attributeId: 2,
        values: ['12GB'],
      },
      {
        attributeId: 3,
        values: ['4500mAh'],
      },
      {
        attributeId: 4,
        values: ['6.7 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: 'f0e5d69b-2d89-4cdd-88d3-5f5c3c8f8e8f',
    name: 'Asus ROG Phone 5 128GB Phantom Black - Unlocked',
    description: 'Description of Asus ROG Phone 5 128GB Phantom Black - Unlocked',
    priceCents: 130000,
    discountedPriceCents: 120000,
    categoryIds: [11],
    brandIds: [9],
    availability: true,
    trending: true,
    imageIds: [16, 17], // Images for this product
    reviewIds: [32, 33, 34, 35],
    tagIds: [20, 21],
    weight: 1.3,
    dimensions: {
      length: 17,
      width: 8,
      height: 2.5,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Phantom Black'],
      },
      {
        attributeId: 1,
        values: ['128GB'],
      },
      {
        attributeId: 2,
        values: ['16GB'],
      },
      {
        attributeId: 3,
        values: ['6000mAh'],
      },
      {
        attributeId: 4,
        values: ['6.78 inches'],
      },
    ],
    discounted: true,
  },
  {
    id: 'a6c2e77d-4a97-4c2d-85d3-8e8e9f9e8e8e',
    name: 'LG V60 ThinQ 5G 128GB Classy Blue - Unlocked',
    description: 'Description of LG V60 ThinQ 5G 128GB Classy Blue - Unlocked',
    priceCents: 90000,
    discountedPriceCents: 85000,
    categoryIds: [12],
    brandIds: [10],
    availability: false,
    trending: false,
    imageIds: [18, 19], // Images for this product
    reviewIds: [36, 37, 38, 39],
    tagIds: [22, 23],
    weight: 1.1,
    dimensions: {
      length: 16,
      width: 8.5,
      height: 2.4,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Classy Blue'],
      },
      {
        attributeId: 1,
        values: ['128GB'],
      },
      {
        attributeId: 2,
        values: ['8GB'],
      },
      {
        attributeId: 3,
        values: ['5000mAh'],
      },
      {
        attributeId: 4,
        values: ['6.8 inches'],
      },
    ],
    discounted: true,
  },
];

/* get product by id and return */
export const getProductById = (id) => {
  let matchingProduct;
  let matchingCategories = [],
    matchingBrands = [],
    matchingImages = [],
    matchingReviews = [],
    matchingAttributes = [],
    matchingTags = [];

  /* Finds the product */
  Product.forEach((product) => {
    if (product.id === id) matchingProduct = product;
  });

  matchingCategories = getCategorieById(matchingProduct.categoryIds);
  matchingBrands = getBrandById(matchingProduct.brandIds);
  matchingImages = getProductImageById(matchingProduct.imageIds);
  matchingReviews = getProductReviewById(matchingProduct.reviewIds);
  matchingAttributes = getProdcutAttributes(matchingProduct.attributes);
  matchingTags = getProductTagById(matchingProduct.tagIds);

  /* Return the product details in a object */
  return {product: matchingProduct, categories: matchingCategories, brands: matchingBrands, images: matchingImages, reviews: matchingReviews, attributes: matchingAttributes, tags: matchingTags};
};

/* Display the products in Homepage */
const renderProducts = (Product) => {
  let trendingProductsHTML = '';

  /* Iterate throught the Products */
  Product.forEach((product) => {
    let productStarsHTML = ''; /* Stores the product rating stars element */
    const productDetails = getProductById(product.id); /* Gets the product details */
    const discountPercent = getDiscountPercent(product.priceCents, product.discountedPriceCents); /* Get discount percent */
    const avgRating = getAvgRating(productDetails.reviews); /* Get the avrage product rate */

    /* Store the fill stars icon */
    for (let i = 0; i < avgRating; i++) {
      productStarsHTML += '<i class="list-slider__star fa-solid fa-star list-slider__star--fill"></i>';
    }

    /* Store the empty stars icon */
    for (let i = 0; i < 5 - avgRating; i++) {
      productStarsHTML += '<i class="list-slider__star fa-solid fa-star"></i>';
    }

    /* Saves the product if its trending */
    product.trending && (trendingProductsHTML += productHTML(product, productDetails, productStarsHTML, discountPercent));
  });

  /* Display the trending products */
  listSliderItemsElm.innerHTML = trendingProductsHTML;
};

/* display products on load */
renderProducts(Product);

// addToCartElm &&
//   addToCartElm.forEach((elm) => {
//     elm.addEventListener('click', (e) => {

//     });
//   });
