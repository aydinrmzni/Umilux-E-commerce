const Reviews = [
  {
    id: 0,
    userId: 1001,
    rating: 5,
    comment: 'Excellent product! Highly recommend.',
    date: '2024-01-15',
  },
  {
    id: 1,
    userId: 1002,
    rating: 4,
    comment: 'Very good, but the battery life could be better.',
    date: '2024-02-10',
  },
  {
    id: 2,
    userId: 1003,
    rating: 3,
    comment: 'Average product, not worth the price.',
    date: '2024-03-05',
  },
  {
    id: 3,
    userId: 1004,
    rating: 5,
    comment: 'Amazing phone with great features!',
    date: '2024-03-25',
  },
  {
    id: 4,
    userId: 1005,
    rating: 4,
    comment: 'Good value for the money.',
    date: '2024-04-12',
  },
  {
    id: 5,
    userId: 1006,
    rating: 2,
    comment: 'Not satisfied with the camera quality.',
    date: '2024-04-30',
  },
  {
    id: 6,
    userId: 1007,
    rating: 5,
    comment: 'Excellent design and performance.',
    date: '2024-05-10',
  },
  {
    id: 7,
    userId: 1008,
    rating: 3,
    comment: "It's okay, but I expected more.",
    date: '2024-05-15',
  },
  {
    id: 8,
    userId: 1009,
    rating: 4,
    comment: 'Good phone, but a bit overpriced.',
    date: '2024-05-20',
  },
  {
    id: 9,
    userId: 1010,
    rating: 5,
    comment: "Best phone I've ever owned!",
    date: '2024-05-25',
  },
  {
    id: 10,
    userId: 1011,
    rating: 4,
    comment: 'Solid performance and build quality.',
    date: '2024-06-01',
  },
  {
    id: 11,
    userId: 1012,
    rating: 3,
    comment: 'Features are good, but the interface is clunky.',
    date: '2024-06-10',
  },
  {
    id: 12,
    userId: 1013,
    rating: 2,
    comment: 'Had issues with the screen.',
    date: '2024-06-20',
  },
  {
    id: 13,
    userId: 1014,
    rating: 5,
    comment: 'Fast and reliable, highly recommended.',
    date: '2024-07-05',
  },
  {
    id: 14,
    userId: 1015,
    rating: 4,
    comment: 'Great phone, but the battery could last longer.',
    date: '2024-07-15',
  },
];

/* get reviews by review ids and return */
export const getProductReviewById = (reviewIds) => {
  let matchingReviews = [];
  Reviews.forEach((review) => {
    reviewIds.forEach((id) => {
      if (review.id === id) matchingReviews.push(review);
    });
  });
  return matchingReviews;
};
