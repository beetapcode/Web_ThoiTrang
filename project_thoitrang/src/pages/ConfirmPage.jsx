import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const ConfirmPage = () => {
  return (
    <div>
      <Header />
      <section className="order-confirm p-to-top">
        <div className="container">
          <div className="row-flex row-flex-product-detail">
            <p>
              Xác nhận đơn hàng:{" "}
              <span style={{ fontWeight: "bold" }}>Nguyễn Văn Thuận #48</span>
            </p>
          </div>
          <div className="row-flex">
            <div className="order-confirm-content">
              <p>
                Đơn hàng của bạn đã được xác nhận{" "}
                <span style={{ fontWeight: "bold" }}>Thành công</span>! <br />
                Chúng tôi sẽ <span style={{ fontWeight: "bold" }}>Giao hàng</span>{" "}
                trong thời gian tối đa là 3 ngày làm việc.
              </p>
              <br />
              <a href="/">
                <button className="main-btn">Tiếp tục mua hàng</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmPage;