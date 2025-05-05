import React, { useState, useEffect } from "react";
import "../assets/css/ProductManagement.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", quantity: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  // Lấy dữ liệu từ localStorage khi tải trang
  useEffect(() => {
    const defaultProducts = [
      { id: 1, name: "Áo Thun Nam", price: 150000, quantity: 50 },
      { id: 2, name: "Quần Jean", price: 300000, quantity: 30 },
      { id: 3, name: "Áo Khoác Nữ", price: 500000, quantity: 20 },
      { id: 4, name: "Giày Thể Thao", price: 800000, quantity: 15 },
    ];

    const storedProducts = JSON.parse(localStorage.getItem("products")) || defaultProducts;
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
    }
    setProducts(storedProducts);
  }, []);

  // Lưu dữ liệu vào localStorage khi danh sách sản phẩm thay đổi
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Xử lý thêm sản phẩm
  const addProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.quantity) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
      return;
    }
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const updatedProducts = [
      ...products,
      { id: newId, ...newProduct, price: parseInt(newProduct.price), quantity: parseInt(newProduct.quantity) },
    ];
    setProducts(updatedProducts);
    setNewProduct({ name: "", price: "", quantity: "" });
  };

  // Xử lý chỉnh sửa sản phẩm
  const editProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  // Lưu chỉnh sửa sản phẩm
  const saveEditProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? editingProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  // Xử lý xóa sản phẩm
  const deleteProduct = (id) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm ID ${id}?`)) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      alert(`Sản phẩm ID ${id} đã bị xóa.`);
    }
  };

  return (
    <div className="admin-section">
      <h2>Quản lý sản phẩm</h2>

      {/* Form thêm sản phẩm */}
      <form onSubmit={addProduct} className="product-form">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Số lượng"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
        />
        <button type="submit" className="btn btn-add">Thêm sản phẩm</button>
      </form>

      {/* Form chỉnh sửa sản phẩm */}
      {editingProduct && (
        <form onSubmit={saveEditProduct} className="product-form">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Giá sản phẩm"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={editingProduct.quantity}
            onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })}
          />
          <button type="submit" className="btn btn-save">Lưu</button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => setEditingProduct(null)}
          >
            Hủy
          </button>
        </form>
      )}

      {/* Bảng sản phẩm */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString("vi-VN")} đ</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn btn-edit" onClick={() => editProduct(product.id)}>
                  Sửa
                </button>
                <button className="btn btn-delete" onClick={() => deleteProduct(product.id)}>
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

export default ProductManagement;