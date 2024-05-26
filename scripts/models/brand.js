const Brand = [
  {
    id: 0,
    name: 'Apple',
  },
  {
    id: 1,
    name: 'Samsung',
  },
  {
    id: 2,
    name: 'Google',
  },
  {
    id: 3,
    name: 'OnePlus',
  },
  {
    id: 4,
    name: 'Sony',
  },
  {
    id: 5,
    name: 'Xiaomi',
  },
  {
    id: 6,
    name: 'Nokia',
  },
  {
    id: 7,
    name: 'Oppo',
  },
  {
    id: 8,
    name: 'Huawei',
  },
  {
    id: 9,
    name: 'Asus',
  },
  {
    id: 10,
    name: 'Motorola',
  },
  {
    id: 11,
    name: 'LG',
  },
  {
    id: 12,
    name: 'Lenovo',
  },
  {
    id: 13,
    name: 'Realme',
  },
  {
    id: 14,
    name: 'Vivo',
  },
  {
    id: 15,
    name: 'ZTE',
  },
];

/* get product brands by brand ids and return */
export const getBrandById = (brandIds) => {
  let matchingBrands = [];
  Brand.forEach((brand) => {
    brandIds.forEach((id) => {
      if (brand.id === id) matchingBrands.push(brand);
    });
  });
  return matchingBrands
};
