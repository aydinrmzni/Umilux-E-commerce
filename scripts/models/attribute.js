const Attributes = [
  {
    id: 0,
    name: 'Color',
  },
  {
    id: 1,
    name: 'Storage',
  },
  {
    id: 2,
    name: 'RAM',
  },
  {
    id: 3,
    name: 'Battery Capacity',
  },
  {
    id: 4,
    name: 'Screen Size',
  },
];

/* get attribute by id and return */
export const getProdcutAttributes = (productAttributes) => {
  let matchingAttributes = [];
  Attributes.forEach((attribute) => {
    productAttributes.forEach((productAttribute) => {
      if (productAttribute.attributeId === attribute.id) matchingAttributes.push(attribute);
    });
  });
  return matchingAttributes;
};
