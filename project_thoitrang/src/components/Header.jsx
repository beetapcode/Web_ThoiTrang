import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/logo.png"; // Import ảnh logo

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cartCount, setCartCount] = useState(0); // State để lưu số lượng sản phẩm trong giỏ
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để kiểm tra trạng thái đăng nhập
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Ẩn menu khi cuộn xuống
    } else {
      setIsVisible(true); // Hiện menu khi cuộn lên
    }
    setLastScrollY(currentScrollY);
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      navigate("/profile"); // Chuyển hướng đến trang cá nhân nếu đã đăng nhập
    } else {
      navigate("/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi localStorage
    setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
    alert("Bạn đã đăng xuất!");
    navigate("/"); // Chuyển hướng về trang chủ
  };

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true); // Nếu có thông tin người dùng, cập nhật trạng thái đăng nhập
    } else {
      setIsLoggedIn(false); // Nếu không có thông tin, đặt trạng thái là chưa đăng nhập
    }

    // Lấy dữ liệu giỏ hàng từ localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.reduce((total, item) => total + item.quantity, 0)); // Tính tổng số lượng sản phẩm
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="container">
        <div className="row-flex">
          <div className="header-bar-icon">
            <i className="bx bx-menu"></i>
          </div>
          <div className="header-logo">
            <a href="/"><img src={logo} alt="Logo" /></a>
          </div>
          <div className="header-nav active">
            <nav>
              <ul>
                <li><a href="/">TRANG CHỦ</a></li>
                <li><a href="/sanpham">SẢN PHẨM</a></li>
                <li><a href="/bosuutap">BỘ SƯU TẬP</a></li>
                <li><a href="/posts">BÀI VIẾT</a></li>
                <li><a href="/contact">LIÊN HỆ</a></li>
              </ul>
            </nav>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm " />
            <i className="bx bx-search"></i>
          </div>
          <div className="header-cart">
            <a href="/cart">
              <i className="bx bx-cart-alt">
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Hiển thị số lượng nếu > 0 */}
              </i>
            </a>
          </div>
          <div className="header-user">
            {isLoggedIn ? (
              <div className="user-logged-in">
                <i
                  id="userIcon"
                  className="bx bxs-user"
                  onClick={handleUserIconClick} // Gắn sự kiện click
                  style={{ cursor: "pointer" }}
                ></i>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <i
                id="userIcon"
                className="bx bxs-user"
                onClick={handleUserIconClick} // Gắn sự kiện click
                style={{ cursor: "pointer" }}
              ></i>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;