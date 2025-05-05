import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/CheckoutPage.css"; // Import CSS cho trang thanh toán

const CheckoutPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  const [paymentMethod, setPaymentMethod] = useState(""); // Lưu phương thức thanh toán
  const [isConfirmed, setIsConfirmed] = useState(false); // Trạng thái xác nhận

  if (!order) {
    return <div>Không tìm thấy thông tin đơn hàng!</div>;
  }

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    // Lưu thông tin đơn hàng vào quản lý đơn hàng
    const orders = JSON.parse(localStorage.getItem("OrderManegement")) || [];
    const newOrder = {
      ...order,
      paymentMethod,
      status: "Chờ xử lý", // Trạng thái mặc định của đơn hàng
    };
    orders.push(newOrder);
    localStorage.setItem("OrderManegement", JSON.stringify(orders));

    setIsConfirmed(true); // Xác nhận thanh toán
  };

  return (
    <div>
      <Header />
      <section className="checkout-section">
        <div className="container">
          <h1>Thông Tin Đơn Hàng</h1>
          <p>Mã Đơn Hàng: {order.id}</p>
          <p>Ngày Đặt Hàng: {order.date}</p>

          {!isConfirmed ? (
            <>
              <h2>Chọn Phương Thức Thanh Toán</h2>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Thanh toán khi nhận hàng"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Thanh toán khi nhận hàng
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Chuyển khoản ngân hàng"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Chuyển khoản ngân hàng
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Thanh toán qua ví điện tử"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Thanh toán qua ví điện tử
                </label>
              </div>
              <button className="confirm-btn modern-btn" onClick={handleConfirm}>
                Xác Nhận Thanh Toán
              </button>
            </>
          ) : (
            <>
              <h2>Chi Tiết Sản Phẩm</h2>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Số lượng: {item.quantity} - Giá:{" "}
                    {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                  </li>
                ))}
              </ul>
              <h2>Tổng Thanh Toán: {order.total.toLocaleString("vi-VN")} đ</h2>
              <p>Phương Thức Thanh Toán: {paymentMethod}</p>
              <p>Cảm ơn bạn đã đặt hàng!</p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CheckoutPage;