import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation để nhận dữ liệu
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/ProductPageInfo.css";

const ProductPageInfo = () => {
  const location = useLocation();
  const product = location.state?.product; // Lấy dữ liệu sản phẩm từ state

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product || !product.id || !product.price || !product.name) {
      alert("Thông tin sản phẩm không hợp lệ!");
      return;
    }
  
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price) * 1000 || 0, // Chuyển giá trị sang đơn vị đồng
      quantity: parseInt(quantity, 10) || 1,
      image: product.image,
    };
  
    const cart = Array.isArray(JSON.parse(localStorage.getItem("cart")))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    const existingProductIndex = cart.findIndex((item) => item.id === cartItem.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += cartItem.quantity;
      alert(`Đã cập nhật số lượng sản phẩm: ${cart[existingProductIndex].name}`);
    } else {
      cart.push(cartItem);
      alert(`Đã thêm sản phẩm mới: ${cartItem.name}`);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  

  if (!product) {
    return <div>Không tìm thấy thông tin sản phẩm!</div>;
  }

  return (
    <div>
      <Header />
      <section className="product-info-detail p-to-top">
        <div className="product-info-container">
          <div className="product-info-breadcrumb">
            <p>Sản Phẩm</p>
            <i className="bx bx-chevron-right"></i>
            <p>Chi Tiết Sản Phẩm</p>  
            <p>{product.name}</p>
          </div>
          <div className="product-info-grid">
            <div className="product-info-left">
              <img className="product-info-main-image" src={product.image} alt={product.name} />
            </div>
            <div className="product-info-right">
              <div className="product-info-details">
                <h1>{product.name}</h1>
                <div className="product-info-price">
                  <p>
                    {product.price.toLocaleString("vi-VN")} <sup>đ</sup>
                  </p>
                </div>
                <div className="product-info-description">
                  <h2>Đặc Điểm Nổi Bật</h2>
                  <p>{product.description || "Không có mô tả sản phẩm."}</p>
                </div>
                <div className="product-info-quantity">
                  <h2>Số Lượng:</h2>
                  <div className="product-info-quantity-input">
                    <i className="product-info-icon bx bx-minus" onClick={handleDecreaseQuantity}></i>
                    <input
                      onKeyDown={() => false}
                      className="product-info-input"
                      type="number"
                      value={quantity}
                      readOnly
                    />
                    <i className="product-info-icon bx bx-plus" onClick={handleIncreaseQuantity}></i>
                  </div>
                </div>
                <div className="product-info-addcart">
                  <button className="product-info-btn" onClick={handleAddToCart}>
                    Thêm Vào Giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductPageInfo;