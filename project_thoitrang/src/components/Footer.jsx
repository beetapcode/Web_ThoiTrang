import React from "react";
import "../assets/css/footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row-grid">
          <div className="footer-item">
            <p>VỀ CHÚNG TÔI</p>
            <p>Team 03</p>
            <p>Đăng kí thành viên</p>
            <p>Ưu đãi & Đặc quyền</p>
          </div>
          <div className="footer-item">
            <p>CHÍNH SÁCH</p>
            <p>Chính sách đổi trả 60 ngày</p>
            <p>Chính sách khuyến mãi</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách giao hàng</p>
          </div>
          <div className="footer-item">
            <p>CHĂM SÓC KHÁCH HÀNG</p>
            <p>Trải nghiệm mua sắm 100% hài lòng</p>
            <p>Hỏi đáp - FAQs</p>
          </div>
          <div className="footer-item">
            <p>ĐỊA CHỈ LIÊN HỆ</p>
            <p>
              Văn phòng và trung tâm vận hành Đà Nẵng: Tầng 3, Tòa nhà R, Đường
              Nguyễn Hữu Thọ, Quận Hải Châu, TP Đà Nẵng
            </p>
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:example@example.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;