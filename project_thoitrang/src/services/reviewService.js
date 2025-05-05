const reviews = [];

export const addReview = (productId, review) => {
  reviews.push({ productId, ...review });
  return reviews.filter((r) => r.productId === productId);
};

export const getReviewsByProductId = (productId) => {
  return reviews.filter((review) => review.productId === productId);
};