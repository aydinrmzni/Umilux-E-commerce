const ProductImage = [
  {
    id: 0,
    imageUrl: 'image/product/product1/1.webp',
    description: 'image for product1',
  },
  {
    id: 1,
    imageUrl: 'image/product/product1/2.webp',
    description: 'image for product1',
  },
  {
    id: 2,
    imageUrl: 'image/product/product2/1.webp',
    description: 'image for product2',
  },
  {
    id: 3,
    imageUrl: 'image/product/product2/2.webp',
    description: 'image for product2',
  },
  {
    id: 4,
    imageUrl: 'image/product/product3/1.webp',
    description: 'image for product3',
  },
  {
    id: 5,
    imageUrl: 'image/product/product3/2.webp',
    description: 'image for product3',
  },
  {
    id: 6,
    imageUrl: 'image/product/product4/1.webp',
    description: 'image for product4',
  },
  {
    id: 7,
    imageUrl: 'image/product/product4/2.webp',
    description: 'image for product4',
  },
  {
    id: 8,
    imageUrl: 'image/product/product5/1.webp',
    description: 'image for product5',
  },
  {
    id: 9,
    imageUrl: 'image/product/product5/2.webp',
    description: 'image for product5',
  },
  {
    id: 10,
    imageUrl: 'image/product/product6/1.webp',
    description: 'image for product6',
  },
  {
    id: 11,
    imageUrl: 'image/product/product6/2.webp',
    description: 'image for product6',
  },
  {
    id: 12,
    imageUrl: 'image/product/product7/1.webp',
    description: 'image for product7',
  },
  {
    id: 13,
    imageUrl: 'image/product/product7/2.webp',
    description: 'image for product7',
  },
  {
    id: 14,
    imageUrl: 'image/product/product8/1.webp',
    description: 'image for product8',
  },
  {
    id: 15,
    imageUrl: 'image/product/product8/2.webp',
    description: 'image for product8',
  },
  {
    id: 16,
    imageUrl: 'image/product/product9/1.webp',
    description: 'image for product9',
  },
  {
    id: 17,
    imageUrl: 'image/product/product9/2.webp',
    description: 'image for product9',
  },
  {
    id: 18,
    imageUrl: 'image/product/product10/1.webp',
    description: 'image for product10',
  },
  {
    id: 19,
    imageUrl: 'image/product/product10/2.webp',
    description: 'image for product10',
  },
];

/* get product image by image ids and return */
export const getProductImageById = (imageIds) => {
  let matchingImages = [];
  ProductImage.forEach((image) => {
    imageIds.forEach((id) => {
      if (image.id === id) matchingImages.push(image);
    });
  });
  return matchingImages;
};
