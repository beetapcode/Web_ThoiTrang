import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebaseConfig";
import "../assets/css/contact.css"; // Import CSS styles for the contact form

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Gửi yêu cầu thành công!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Đã xảy ra lỗi khi gửi yêu cầu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Họ tên"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Địa chỉ Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Nội dung yêu cầu"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="btn-submit">Gửi yêu cầu</button>
    </form>
  );
};

export default ContactForm;