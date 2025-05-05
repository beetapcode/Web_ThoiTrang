import React from "react";
import "../assets/css/dashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Dữ liệu cho biểu đồ cột (Doanh thu theo tháng)
  const barData = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
    datasets: [
      {
        label: "Doanh thu (triệu đồng)",
        data: [120, 150, 180, 200, 170, 190],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ tròn (Đơn hàng theo trạng thái)
  const pieData = {
    labels: ["Hoàn thành", "Đang xử lý", "Đã hủy"],
    datasets: [
      {
        label: "Trạng thái đơn hàng",
        data: [300, 150, 50],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
        borderColor: ["#4caf50", "#ff9800", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>
      <p>Chào mừng bạn đến với trang quản trị!</p>

      {/* Thống kê */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>Người dùng</h2>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <h2>Đơn hàng</h2>
          <p>567</p>
        </div>
        <div className="stat-card">
          <h2>Sản phẩm</h2>
          <p>89</p>
        </div>
        <div className="stat-card">
          <h2>Doanh thu</h2>
          <p>12,345,000 đ</p>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="dashboard-charts">
        <div className="chart">
          <h3>Doanh thu theo tháng</h3>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
        <div className="chart">
          <h3>Đơn hàng theo trạng thái</h3>
          <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;