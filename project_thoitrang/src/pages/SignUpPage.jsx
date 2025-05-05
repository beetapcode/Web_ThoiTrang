import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // Thêm tài khoản admin vào localStorage nếu chưa tồn tại
    if (!localStorage.getItem("admin")) {
      const admin = {
        username: "admin",
        password: "admin123",
      };
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Kiểm tra nếu có trường nào bị bỏ trống
    if (!username || !email || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra điều kiện tài khoản (8-15 ký tự, bao gồm chữ cái và số)
    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    if (!usernameRegex.test(username)) {
      alert("Tên đăng nhập phải từ 8-15 ký tự và bao gồm chữ cái và số.");
      return;
    }

    // Kiểm tra điều kiện mật khẩu (ít nhất 1 chữ cái, 1 ký tự đặc biệt, 1 số)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái, 1 ký tự đặc biệt và 1 số."
      );
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }

    // Lưu thông tin tài khoản vào localStorage
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem(username, JSON.stringify(userData));
    alert("Đăng ký thành công!");
    window.location.href = "/login"; // Chuyển hướng đến trang đăng nhập
  };

  return (
    <div>
      <Header />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Sign Up Form */}
          <div className="auth-form">
            <form onSubmit={handleSignUp}>
              <div className="auth-form__container">
                <div className="auth-form__header">
                  <h3 className="auth-form__heading">Đăng Kí</h3>
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
                      id="email"
                      type="text"
                      className="auth-form__input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <div className="auth-form__group">
                    <input
                      id="confirmPassword"
                      type="password"
                      className="auth-form__input"
                      placeholder="Nhập lại mật khẩu"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="auth-form__aside">
                  <div className="auth-form__help">
                    <a href="#" className="auth-form__help-link">
                      Cần trợ giúp?
                    </a>
                  </div>
                </div>
                <div className="auth-form__controls">
                  <button
                    className="btn auth-form__controls-back btn--normal"
                    onClick={() => (window.location.href = "/")}
                  >
                    TRANG CHỦ
                  </button>
                  <button
                    className="btn auth-form__controls-back btn--normal"
                    onClick={() => (window.location.href = "/login")}
                  >
                    ĐĂNG NHẬP
                  </button>
                  <button id="btnSignup" className="btn btn--primary" type="submit">
                    ĐĂNG KÍ
                  </button>
                </div>
              </div>
            </form>
            <div className="auth-form__socials">
              <a
                href="#"
                className="auth-form__socials--facebook btn btn--size-s btn--width-icon"
              >
                <i className="bx bxl-facebook-square"></i>
                <span className="auth-form__socials-title">
                  Kết nối với Facebook
                </span>
              </a>
              <a
                href="#"
                className="auth-form__socials--google btn btn--size-s btn--width-icon"
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

export default SignUpPage;