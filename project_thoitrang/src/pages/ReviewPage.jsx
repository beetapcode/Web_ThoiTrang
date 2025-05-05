import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";
import { addReview, getReviewsByProductId } from "../services/reviewService";

const ReviewPage = ({ productId }) => {
  const [reviews, setReviews] = useState(getReviewsByProductId(productId));
  const [newReview, setNewReview] = useState({ user: "", rating: 0, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews(addReview(productId, newReview));
    setNewReview({ user: "", rating: 0, comment: "" });
  };

  return (
    <div>
      <Header />
      <section className="review-page">
        <div className="container">
          <h1>Đánh Giá Sản Phẩm</h1>
          <div className="reviews">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <h3>{review.user}</h3>
                <p>Đánh giá: {review.rating} sao</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Thêm Đánh Giá</h2>
            <input
              type="text"
              placeholder="Tên của bạn"
              value={newReview.user}
              onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            />
            <input
              type="number"
              placeholder="Đánh giá (1-5)"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            />
            <textarea
              placeholder="Nhận xét"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            ></textarea>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReviewPage;