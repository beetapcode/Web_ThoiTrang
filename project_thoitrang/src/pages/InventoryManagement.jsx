import React, { useState, useEffect } from "react";
import "../assets/css/admin.css"; // Thêm CSS cho trang quản lý kho

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });
  const [editingItem, setEditingItem] = useState(null);

  // Lấy dữ liệu từ localStorage khi tải trang
  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem("inventory")) || [
      { id: 1, name: "Áo Thun Nam", quantity: 100 },
      { id: 2, name: "Quần Jean", quantity: 50 },
    ];
    setInventory(storedInventory);
  }, []);

  // Lưu dữ liệu vào localStorage khi danh sách kho thay đổi
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  // Xử lý thêm sản phẩm vào kho
  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.name || newItem.quantity <= 0) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
      return;
    }
    const newId = inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1;
    const updatedInventory = [...inventory, { id: newId, ...newItem }];
    setInventory(updatedInventory);
    setNewItem({ name: "", quantity: 0 });
  };

  // Xử lý chỉnh sửa sản phẩm
  const editItem = (id) => {
    const itemToEdit = inventory.find((item) => item.id === id);
    setEditingItem(itemToEdit);
  };

  // Lưu chỉnh sửa sản phẩm
  const saveEditItem = (e) => {
    e.preventDefault();
    const updatedInventory = inventory.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    setInventory(updatedInventory);
    setEditingItem(null);
  };

  // Xử lý xóa sản phẩm
  const deleteItem = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm ID ${id}?`)) {
      const updatedInventory = inventory.filter((item) => item.id !== id);
      setInventory(updatedInventory);
      alert(`Sản phẩm ID ${id} đã bị xóa.`);
    }
  };

  return (
    <div className="admin-section">
      <h2>Quản lý kho</h2>

      {/* Form thêm sản phẩm */}
      <form onSubmit={addItem} className="inventory-form">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Số lượng"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
        />
        <button type="submit" className="btn btn-add">Thêm sản phẩm</button>
      </form>

      {/* Form chỉnh sửa sản phẩm */}
      {editingItem && (
        <form onSubmit={saveEditItem} className="inventory-form">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={editingItem.quantity}
            onChange={(e) => setEditingItem({ ...editingItem, quantity: parseInt(e.target.value) })}
          />
          <button type="submit" className="btn btn-save">Lưu</button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => setEditingItem(null)}
          >
            Hủy
          </button>
        </form>
      )}

      {/* Bảng quản lý kho */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="btn btn-edit" onClick={() => editItem(item.id)}>
                  Sửa
                </button>
                <button className="btn btn-delete" onClick={() => deleteItem(item.id)}>
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

export default InventoryManagement;