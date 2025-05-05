import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header_admin.css";
import logo from "../assets/images/logo.png";

const HeaderAdmin = ({ onLogout }) => {
  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <img src={logo} alt="Logo" className="admin-logo" />
      </div>
      <div className="admin-header-right">
        <ul className="admin-nav">
          <li>
            <Link to="/admin/dashboard">
              <i className="bx bxs-dashboard"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/accounts">
              <i className="bx bx-list-ul"></i> Quản lý tài khoản
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <i className="bx bx-list-ul"></i> Quản lý Đơn Hàng
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <i className="bx bx-list-ul"></i> Quản lý Sản Phẩm
            </Link>
          </li>
          <li>
            <Link to="/admin/inventory">
              <i className="bx bx-box"></i> Quản lý kho
            </Link>
          </li>
          <li>
            <button className="logout-btn" onClick={onLogout}>
              <i className="bx bxs-user"></i> Đăng xuất
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAdmin;