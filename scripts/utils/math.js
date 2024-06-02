/* Calculate the discount percent of the product */
export const getDiscountPercent = (oldPrice, currentPrice) => {
  return parseFloat((((oldPrice - currentPrice) / oldPrice) * 100).toFixed(1));
};

/* Calculate the avrage rate for the product */
export const getAvgRating = (reviews) => {
  let ratingSum = 0;
  reviews.forEach((review) => {
    ratingSum += review.rating;
  });
  return Math.round(ratingSum / reviews.length);
};

/* Format the curency from cents to dollar */
export function centToDollar(cent) {
  return (cent / 100).toFixed(2);
}
