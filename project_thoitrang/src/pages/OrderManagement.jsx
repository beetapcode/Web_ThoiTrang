import React, { useState, useEffect } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ customer: "", total: "", status: "Đang xử lý" });
  const [editingOrder, setEditingOrder] = useState(null);

  // Lấy dữ liệu từ localStorage khi tải trang
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [
      { id: 1, customer: "user1", total: 500000, status: "Đang xử lý" },
      { id: 2, customer: "user2", total: 1200000, status: "Hoàn thành" },
    ];
    setOrders(storedOrders);
  }, []);

  // Lưu dữ liệu vào localStorage khi danh sách đơn hàng thay đổi
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Xử lý thay đổi trạng thái đơn hàng
  const updateStatus = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, status: order.status === "Đang xử lý" ? "Hoàn thành" : "Đang xử lý" }
        : order
    );
    setOrders(updatedOrders);
  };

  // Xử lý xóa đơn hàng
  const deleteOrder = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa đơn hàng ID ${id}?`)) {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
      alert(`Đơn hàng ID ${id} đã bị xóa.`);
    }
  };

  // Xử lý thêm đơn hàng
  const addOrder = (e) => {
    e.preventDefault();
    if (!newOrder.customer || !newOrder.total) {
      alert("Vui lòng nhập đầy đủ thông tin đơn hàng.");
      return;
    }
    const newId = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1;
    const updatedOrders = [...orders, { id: newId, ...newOrder, total: parseInt(newOrder.total) }];
    setOrders(updatedOrders);
    setNewOrder({ customer: "", total: "", status: "Đang xử lý" });
  };

  // Xử lý chỉnh sửa đơn hàng
  const editOrder = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    setEditingOrder(orderToEdit);
  };

  // Lưu chỉnh sửa đơn hàng
  const saveEditOrder = (e) => {
    e.preventDefault();
    const updatedOrders = orders.map((order) =>
      order.id === editingOrder.id ? editingOrder : order
    );
    setOrders(updatedOrders);
    setEditingOrder(null);
  };

  return (
    <div className="admin-section">
      <h2>Quản lý đơn hàng</h2>

      {/* Form thêm đơn hàng */}
      <form onSubmit={addOrder} className="order-form">
        <input
          type="text"
          placeholder="Tên khách hàng"
          value={newOrder.customer}
          onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
        />
        <input
          type="number"
          placeholder="Tổng tiền"
          value={newOrder.total}
          onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })}
        />
        <button type="submit" className="btn btn-add">Thêm đơn hàng</button>
      </form>

      {/* Form chỉnh sửa đơn hàng */}
      {editingOrder && (
        <form onSubmit={saveEditOrder} className="order-form">
          <input
            type="text"
            placeholder="Tên khách hàng"
            value={editingOrder.customer}
            onChange={(e) => setEditingOrder({ ...editingOrder, customer: e.target.value })}
          />
          <input
            type="number"
            placeholder="Tổng tiền"
            value={editingOrder.total}
            onChange={(e) => setEditingOrder({ ...editingOrder, total: e.target.value })}
          />
          <button type="submit" className="btn btn-save">Lưu</button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => setEditingOrder(null)}
          >
            Hủy
          </button>
        </form>
      )}

      {/* Bảng đơn hàng */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Khách hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total.toLocaleString("vi-VN")} đ</td>
              <td className={order.status === "Hoàn thành" ? "status-completed" : "status-pending"}>
                {order.status}
              </td>
              <td>
                <button className="btn btn-status" onClick={() => updateStatus(order.id)}>
                  {order.status === "Đang xử lý" ? "Hoàn thành" : "Đang xử lý"}
                </button>
                <button className="btn btn-edit" onClick={() => editOrder(order.id)}>
                  Sửa
                </button>
                <button className="btn btn-delete" onClick={() => deleteOrder(order.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;