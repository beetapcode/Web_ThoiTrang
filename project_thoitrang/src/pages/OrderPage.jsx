import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const OrderPage = () => {
  const orders = [
    {
      id: 1,
      image: "./images-sp/ao1.jpeg",
      name: "Áo Sơ Mi Dài Tay Essentials Cotton",
      price: "350,000 đ",
      quantity: 1,
      status: "Giao hàng thành công",
    },
    {
      id: 2,
      image: "./images-sp/sp3.webp",
      name: "Áo Sơ Mi Dài Tay Essentials Cotton",
      price: "350,000 đ",
      quantity: 1,
      status: "Giao hàng thành công",
    },
    {
      id: 3,
      image: "./images-sp/ao10.jpeg",
      name: "Áo Thun Nam Cotton Excool 100%",
      price: "250,000 đ",
      quantity: 1,
      status: "Giao hàng thành công",
    },
  ];

  return (
    <div>
      <Header />
      <section className="order-page">
        <div className="container">
          <h1 className="main-h2">Lịch Sử Mua Hàng</h1>
          {orders.map((order) => (
            <div key={order.id} className="cart-section-left-detail">
              <table>
                <thead>
                  <tr>
                    <th>#{order.id}</th>
                    <th>Sản Phẩm</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        style={{ width: "70px" }}
                        src={order.image}
                        alt={order.name}
                      />
                    </td>
                    <td>
                      <div className="product-detail-right-infor">
                        <h1 style={{ fontSize: "18px" }}>{order.name}</h1>
                        <div className="hot-product-item-price">
                          <p style={{ fontSize: "18px" }}>{order.price}</p>
                        </div>
                      </div>
                      <div className="product-detail-right-quantity-input">
                        <input
                          style={{ fontSize: "15px" }}
                          className="quantity-input"
                          type="number"
                          value={order.quantity}
                          disabled
                        />
                      </div>
                    </td>
                    <td style={{ color: "green", fontSize: "18px" }}>
                      {order.status}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="order-actions">
                <a href="/danhgia">
                  <button className="btn-danhgia">Đánh giá</button>
                </a>
                <a href="/contact">
                  <button className="btn-lienhe">Liên hệ người bán</button>
                </a>
                <a href="/sanpham">
                  <button className="btn-mualai">Mua lại</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OrderPage;