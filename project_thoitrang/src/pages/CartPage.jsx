import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để điều hướng
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/cart.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập (ví dụ: kiểm tra token trong localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Lấy dữ liệu giỏ hàng từ localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const validatedCart = storedCart.map((item) => ({
      ...item,
      price: parseFloat(item.price) || 0, // Đảm bảo `price` là số
      quantity: parseInt(item.quantity, 10) || 0, // Đảm bảo `quantity` là số nguyên
    }));
    setCart(validatedCart);
    calculateTotal(validatedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0; // Đảm bảo `price` là số
      const quantity = parseInt(item.quantity, 10) || 0; // Đảm bảo `quantity` là số nguyên
      return sum + price * quantity;
    }, 0);
    setTotalPrice(total);
  };

  const handleRemove = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotal(updatedCart);
    }
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    const newQuantity = item.quantity + delta;

    if (newQuantity > 0) {
      item.quantity = newQuantity;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotal(updatedCart);
    } else {
      handleRemove(index);
    }
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để đặt hàng!");
      navigate("/login"); // Điều hướng đến trang đăng nhập
      return;
    }

    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
      return;
    }

    // Lưu đơn hàng vào danh sách quản lý đơn hàng
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(), // Tạo ID duy nhất cho đơn hàng
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString("vi-VN"), // Ngày giờ đặt hàng
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Xóa giỏ hàng sau khi gửi đơn hàng
    setCart([]);
    localStorage.removeItem("cart");
    setTotalPrice(0);

    // Chuyển hướng đến trang thanh toán
    navigate("/checkout", { state: { order: newOrder } });
  };

  return (
    <div>
      <Header />
      <section className="cart-section modern-cart p-to-top">
        <div className="container">
          <h1 className="cart-title">| Giỏ Hàng |</h1>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Giỏ hàng của bạn đang trống.</p>
              <a href="/sanpham" className="main-btn">
                Mua sắm ngay
              </a>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">
                        Giá: {(item.price || 0).toLocaleString("vi-VN")} đ
                      </p>
                      <p className="cart-item-total">
                        Tổng: {(item.price * item.quantity || 0).toLocaleString("vi-VN")} đ
                      </p>
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(index, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(index, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-actions">
                      <p className="cart-item-total">
                        Tổng: {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                      </p>
                      <button
                        className="remove-btn modern-btn"
                        onClick={() => handleRemove(index)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h2>Tổng Đơn Hàng</h2>
                <p className="total-price">{totalPrice.toLocaleString("vi-VN")} đ</p>
                <button className="checkout-btn modern-btn" onClick={handleCheckout}>
                  Gửi Đơn Hàng
                </button>
                <a href="/sanpham" className="continue-shopping">
                  Tiếp tục mua sắm
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;