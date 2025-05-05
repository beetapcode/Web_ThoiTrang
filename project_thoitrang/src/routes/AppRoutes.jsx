import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import OrderPage from "../pages/OrderPage";
import ConfirmPage from "../pages/ConfirmPage";
import AdminPage from "../pages/AdminPage";
import CollectionPage from "../pages/CollectionPage";
import ReviewPage from "../pages/ReviewPage";
import PostPage from "../pages/PostPage";
import ProductPageInfo from "../pages/ProductPageInfo";
import ProfilePage from "../pages/ProfilePage";
import CheckoutPage from "../pages/CheckoutPage";
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sanpham" element={<ProductPage />} />
        <Route path="/product-info/:id" element={<ProductPageInfo />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/lichsumua" element={<OrderPage />} />
        <Route path="/xacnhandon" element={<ConfirmPage />} />
        <Route path="/bosuutap" element={<CollectionPage />} />
        <Route path="/danhgia" element={<ReviewPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
  );
};

export default AppRoutes;