import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockTime, setLockTime] = useState(0);

  // Thêm tài khoản admin vào localStorage nếu chưa tồn tại
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      const admin = {
        username: "admin",
        password: "admin123",
        role: "admin", // Vai trò admin
      };
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra nếu tài khoản đang bị khóa
    const currentTime = Date.now();
    if (lockTime > currentTime) {
      const remainingTime = Math.ceil((lockTime - currentTime) / 1000);
      alert(`Tài khoản đang bị khóa. Vui lòng thử lại sau ${remainingTime} giây.`);
      return;
    }

    // Kiểm tra nếu người dùng là admin
    if (username === "admin" && password === "admin123") {
      alert("Đăng nhập thành công với tài khoản admin");
      localStorage.setItem("token", "admin-token"); // Lưu token giả lập
      localStorage.setItem("role", "admin"); // Lưu vai trò admin
      window.location.href = "/admin"; // Chuyển hướng đến trang admin
      return;
    }

    const userData = localStorage.getItem(username);

    if (!userData) {
      alert("Tài khoản không tồn tại");
    } else {
      const data = JSON.parse(userData);
      if (username === data.username && password === data.password) {
        alert("Đăng nhập thành công");
        setLoginAttempts(0); // Reset số lần đăng nhập sai
        localStorage.setItem("token", "user-token"); // Lưu token giả lập
        localStorage.setItem("role", "user"); // Lưu vai trò user
        window.location.href = "/"; // Chuyển hướng đến trang chủ
      } else {
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        alert("Thông tin đăng nhập không đúng");

        // Kiểm tra số lần đăng nhập sai
        if (newAttempts >= 3) {
          const lockDuration = Math.pow(2, newAttempts - 3) * 60 * 1000; // Tăng thời gian khóa theo cấp số nhân
          setLockTime(Date.now() + lockDuration);
          const lockMinutes = Math.ceil(lockDuration / 60000);
          alert(`Bạn đã nhập sai quá 3 lần. Tài khoản sẽ bị khóa trong ${lockMinutes} phút.`);
        }
      }
    }
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    alert("Chức năng kết nối với Facebook đang được phát triển!");
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    alert("Chức năng kết nối với Google đang được phát triển!");
  };

  return (
    <div>
      <Header />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login form */}
          <div className="auth-form">
            <form onSubmit={handleLogin}>
              <div className="auth-form__container">
                <div className="auth-form__header">
                  <h3 className="auth-form__heading">Đăng nhập</h3>
                </div>
                <div className="auth-form__form">
                  <div className="auth-form__group">
                    <input
                      id="username"
                      type="text"
                      className="auth-form__input"
                      placeholder="Tên đăng nhập"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="auth-form__group">
                    <input
                      id="password"
                      type="password"
                      className="auth-form__input"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="auth-form__aside">
                  <div className="auth-form__help">
                    <a
                      href="#"
                      className="auth-form__help-link auth-form__help-forgot"
                    >
                      Quên mật khẩu
                    </a>
                    <span className="auth-form__help-separate"></span>
                    <a href="#" className="auth-form__help-link">
                      Cần trợ giúp?
                    </a>
                  </div>
                </div>
                <div className="auth-form__controls">
                  <a className="btn auth-form__controls-back btn--normal" href="/">
                    TRANG CHỦ
                  </a>
                  <a className="btn auth-form__controls-back btn--normal" href="/signup">
                    ĐĂNG KÍ
                  </a>
                  <button id="btnLogin" className="btn btn--primary" type="submit">
                    ĐĂNG NHẬP
                  </button>
                </div>
              </div>
            </form>
            <div className="auth-form__socials">
              <a
                href="#"
                className="auth-form__socials--facebook btn btn--size-s btn--width-icon"
                onClick={handleFacebookLogin}
              >
                <i className="bx bxl-facebook-square"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Facebook
                </span>
              </a>
              <a
                href="#"
                className="auth-form__socials--google btn btn--size-s btn--width-icon"
                onClick={handleGoogleLogin}
              >
                <i className="bx bxl-google"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Google
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;