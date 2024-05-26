import {getProdcutAttributes} from './attribute.js';
import {getBrandById} from './brand.js';
import {getCategorieById} from './categorie.js';
import {getProductImageById} from './image.js';
import {getProductReviewById} from './review.js';
import {getProductTagById} from './tag.js';

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
    imageIds: [3, 4, 5],
    reviewIds: [2, 3],
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
    imageIds: [6, 7, 8],
    reviewIds: [4, 5],
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
    imageIds: [9, 10, 11],
    reviewIds: [6, 7],
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
    imageIds: [12, 13, 14],
    reviewIds: [8, 9],
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
    imageIds: [15, 16, 17],
    reviewIds: [10, 11],
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
    imageIds: [18, 19, 20],
    reviewIds: [12, 13],
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
    imageIds: [24, 25, 26],
    reviewIds: [16, 17],
    tagIds: [16, 17],
    weight: 1.2,
    dimensions: {
      length: 14,
      width: 7,
      height: 2.4,
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
  },
  {
    id: 'e4f7989b-70d2-44f1-8e9f-5f87e5f8d9f9',
    name: 'Asus ROG Phone 5 128GB Phantom Black - Unlocked',
    description: 'Description of Asus ROG Phone 5 128GB Phantom Black - Unlocked',
    priceCents: 95000,
    discountedPriceCents: 90000,
    categoryIds: [10],
    brandIds: [8],
    availability: true,
    trending: true,
    imageIds: [27, 28, 29],
    reviewIds: [18, 19],
    tagIds: [18, 19],
    weight: 1.3,
    dimensions: {
      length: 15,
      width: 9,
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
  },
  {
    id: 'f5a8798c-3f9e-4f4f-9a9f-6f8a8f8b8f9a',
    name: 'Motorola Edge Plus 5G 256GB Thunder Grey - Unlocked',
    description: 'Description of Motorola Edge Plus 5G 256GB Thunder Grey - Unlocked',
    priceCents: 80000,
    discountedPriceCents: 75000,
    categoryIds: [11],
    brandIds: [9],
    availability: false,
    trending: false,
    imageIds: [30, 31, 32],
    reviewIds: [20, 21],
    tagIds: [20, 21],
    weight: 1.2,
    dimensions: {
      length: 14,
      width: 7.5,
      height: 2.3,
    },
    attributes: [
      {
        attributeId: 0,
        values: ['Thunder Grey'],
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
        values: ['6.7 inches'],
      },
    ],
  },
  {
    id: 'g6b7f89d-5f3e-4d4e-8a6d-7c9e8f9a0b6c',
    name: 'LG V60 ThinQ 5G 128GB Classy Blue - Unlocked',
    description: 'Description of LG V60 ThinQ 5G 128GB Classy Blue - Unlocked',
    priceCents: 70000,
    discountedPriceCents: 65000,
    categoryIds: [12],
    brandIds: [10],
    availability: true,
    trending: false,
    imageIds: [33, 34, 35],
    reviewIds: [22, 23],
    tagIds: [22, 23],
    weight: 1.1,
    dimensions: {
      length: 14,
      width: 8,
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
  },
];

/* get product by id and return */
const getProductById = (id) => {
  let matchingProduct;
  let matchingCategories = [],
    matchingBrands = [],
    matchingImages = [],
    matchingReviews = [],
    matchingAttributes = [],
    matchingTags = [];
  Product.forEach((product) => {
    if (product.id === id) matchingProduct = product;
  });
  matchingCategories = getCategorieById(matchingProduct.categoryIds);
  matchingBrands = getBrandById(matchingProduct.brandIds);
  matchingImages = getProductImageById(matchingProduct.imageIds);
  matchingReviews = getProductReviewById(matchingProduct.reviewIds);
  matchingAttributes = getProdcutAttributes(matchingProduct.attributes);
  matchingTags = getProductTagById(matchingProduct.tagIds);
  return {product: matchingProduct, categories: matchingCategories, brands: matchingBrands, images: matchingImages, reviews: matchingReviews, attributes: matchingAttributes, tags: matchingTags};
};

console.log(getProductById('1a9f33bb-75d4-4bda-b9d0-3fb1f98e9b02'));
