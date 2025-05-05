import React, { useState } from "react";

const AccountManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "user1@example.com", status: "Hoạt động" },
    { id: 2, username: "user2", email: "user2@example.com", status: "Hoạt động" },
  ]);

  // Xử lý khóa/mở khóa tài khoản
  const toggleLockUser = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Hoạt động" ? "Bị khóa" : "Hoạt động" }
        : user
    );
    setUsers(updatedUsers);
    alert(`Tài khoản ID ${id} đã được cập nhật trạng thái.`);
  };

  // Xử lý xóa tài khoản
  const deleteUser = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa tài khoản ID ${id}?`)) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      alert(`Tài khoản ID ${id} đã bị xóa.`);
    }
  };

  return (
    <div className="admin-section">
      <h2>Quản lý tài khoản</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên tài khoản</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className={user.status === "Hoạt động" ? "status-active" : "status-locked"}>
                {user.status}
              </td>
              <td>
                <button
                  className={`btn ${user.status === "Hoạt động" ? "btn-lock" : "btn-unlock"}`}
                  onClick={() => toggleLockUser(user.id)}
                >
                  {user.status === "Hoạt động" ? "Khóa" : "Mở khóa"}
                </button>
                <button className="btn btn-delete" onClick={() => deleteUser(user.id)}>
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

export default AccountManagement;