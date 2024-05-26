const Tags = [
  {
    id: 0,
    name: 'New Arrival',
  },
  {
    id: 1,
    name: 'Best Seller',
  },
  {
    id: 2,
    name: 'Discount',
  },
  {
    id: 3,
    name: 'Limited Edition',
  },
  {
    id: 4,
    name: 'Popular',
  },
  {
    id: 5,
    name: 'Trending',
  },
  {
    id: 6,
    name: 'Exclusive',
  },
  {
    id: 7,
    name: 'Top Rated',
  },
  {
    id: 8,
    name: 'Clearance',
  },
  {
    id: 9,
    name: 'Free Shipping',
  },
  {
    id: 10,
    name: 'Back in Stock',
  },
  {
    id: 11,
    name: 'Limited Time Offer',
  },
  {
    id: 12,
    name: 'Flash Sale',
  },
  {
    id: 13,
    name: 'Holiday Special',
  },
  {
    id: 14,
    name: 'Eco-Friendly',
  },
  {
    id: 15,
    name: 'Gift Idea',
  },
];

/* get tag by tag ids and return */
export const getProductTagById = (tagIds) => {
  let matchingTags = [];
  Tags.forEach((tag) => {
    tagIds.forEach((id) => {
      if (tag.id === id) matchingTags.push(tag);
    });
  });
  return matchingTags;
};
