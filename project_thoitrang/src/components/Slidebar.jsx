import React from "react";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-top">
        <img src="./assets/images/logo.png" alt="Logo" />
      </div>
      <div className="admin-sidebar-content">
        <div className="img-admin">
          <img style={{ width: "120px" }} src="./assets/images/admin.jpeg" alt="Admin" />
          <p>ADMIN</p>
        </div>
        <ul>
          <li><a href="#"><i className="bx bxs-dashboard"></i>Dashboard</a></li>
          <li><a href="#"><i className="bx bx-list-ul"></i>Quản lý tài khoản</a></li>
          <li><a href="#"><i className="bx bx-list-ul"></i>Quản lý Đơn Hàng</a></li>
          <li><a href="#"><i className="bx bx-list-ul"></i>Quản lý Sản Phẩm</a></li>
          <li><a href="#"><i className="bx bx-list-ul"></i>Thống kê</a></li>
          <li><a href="#"><i className="bx bxs-user"></i>Đăng xuất</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;