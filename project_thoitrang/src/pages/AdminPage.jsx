import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../assets/css/admin.css";
import HeaderAdmin from "../components/Header_admin";
import Dashboard from "./Dashboard";
import AccountManagement from "./AccountManagement";
import OrderManagement from "./OrderManagement";
import ProductManagement from "./ProductManagement";
import InventoryManagement from "./InventoryManagement";

const AdminPage = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("Admin"); // Tên admin (có thể lấy từ localStorage hoặc API)

  // Kiểm tra quyền truy cập (ví dụ: kiểm tra token hoặc vai trò người dùng)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // Giả sử bạn lưu vai trò người dùng trong localStorage

    if (!token || userRole !== "admin") {
      alert("Bạn không có quyền truy cập vào trang quản trị!");
      navigate("/login"); // Điều hướng đến trang đăng nhập
    }

    // Lấy tên admin từ localStorage (nếu có)
    const adminData = JSON.parse(localStorage.getItem("admin"));
    if (adminData && adminData.username) {
      setAdminName(adminData.username);
    }
  }, [navigate]);

  // Xử lý đăng xuất
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login"); // Điều hướng đến trang đăng nhập
    }
  };

  return (
    <section className="admin">
      {/* Header Admin */}
      <HeaderAdmin onLogout={handleLogout} />

      {/* Content */}
      <div className="admin-content">
        <div className="welcome-message">
          <h1>Chào mừng, {adminName}!</h1>
          <p>Chúc bạn một ngày làm việc hiệu quả. Dưới đây là tóm tắt nhanh về hệ thống:</p>
        </div>

        {/* Bảng tóm tắt */}
        <div className="admin-summary">
          <div className="summary-card">
            <h2>Người dùng</h2>
            <p>1,234</p>
          </div>
          <div className="summary-card">
            <h2>Đơn hàng</h2>
            <p>567</p>
          </div>
          <div className="summary-card">
            <h2>Sản phẩm</h2>
            <p>89</p>
          </div>
          <div className="summary-card">
            <h2>Doanh thu</h2>
            <p>12,345,000 đ</p>
          </div>
        </div>

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accounts" element={<AccountManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="inventory" element={<InventoryManagement />} /> {/* Quản lý kho */}
        </Routes>
      </div>
    </section>
  );
};

export default AdminPage;