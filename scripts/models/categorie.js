const Categorie = [
  {
    id: 0,
    name: 'Computer & Laptop',
    iconUrl: '',
  },
  {
    id: 1,
    name: 'Tablets & ipad',
    iconUrl: '',
  },
  {
    id: 2,
    name: 'Printers & Cameras',
    iconUrl: '',
  },
  {
    id: 3,
    name: 'Smart Phones',
    iconUrl: '',
  },
  {
    id: 4,
    name: 'Keyboard and Mouse',
    iconUrl: '',
  },
  {
    id: 5,
    name: 'Video Games',
    iconUrl: '',
  },
  {
    id: 6,
    name: 'Sports & Outdoors',
    iconUrl: '',
  },
  {
    id: 7,
    name: 'Smart Watch',
    iconUrl: '',
  },
  {
    id: 8,
    name: 'Headphone & Audios',
    iconUrl: '',
  },
  {
    id: 9,
    name: 'Home Appliances',
    iconUrl: '',
  },
  {
    id: 10,
    name: 'Furniture',
    iconUrl: '',
  },
  {
    id: 11,
    name: 'Toys & Games',
    iconUrl: '',
  },
  {
    id: 12,
    name: 'Clothing & Accessories',
    iconUrl: '',
  },
  {
    id: 13,
    name: 'Beauty & Personal Care',
    iconUrl: '',
  },
  {
    id: 14,
    name: 'Books & Stationery',
    iconUrl: '',
  },
  {
    id: 15,
    name: 'Health & Wellness',
    iconUrl: '',
  },
  {
    id: 16,
    name: 'Automotive',
    iconUrl: '',
  },
  {
    id: 17,
    name: 'Jewelry & Watches',
    iconUrl: '',
  },
  {
    id: 18,
    name: 'Musical Instruments',
    iconUrl: '',
  },
  {
    id: 19,
    name: 'Pet Supplies',
    iconUrl: '',
  },
];

/* get product categories by categorie id and return */
export const getCategorieById = (categorieIds) => {
  let matchingCategories = [];
  Categorie.forEach((categorie) => {
    categorieIds.forEach((id) => {
      if (categorie.id === id) matchingCategories.push(categorie);
    });
  });
  return matchingCategories;
};
