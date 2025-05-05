import React from "react";
import "../assets/css/HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ao1 from "../assets/images-sp/ao1.jpeg";
import ao2 from "../assets/images-sp/ao2.jpeg";
import ao3 from "../assets/images-sp/ao3.jpeg";
import ao4 from "../assets/images-sp/ao4.jpeg";
import ao5 from "../assets/images-sp/ao5.jpeg";
import ao6 from "../assets/images-sp/ao6.jpeg";
import ao7 from "../assets/images-sp/ao7.jpeg";
import ao8 from "../assets/images-sp/ao8.jpeg";
import ao9 from "../assets/images-sp/ao9.jpeg";
import ao10 from "../assets/images-sp/ao10.jpeg";
import banner1 from "../assets/images/banner1.jpeg";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Áo Sơ Mi Dài Tay Essentials Cotton",
      description: "100% cotton",
      price: "350,000",
      discount: "50,000",
      image: ao1,
      link: "/product/1",
    },
    {
      id: 2,
      name: "Áo Polo nam Excool Essentials",
      description: "100% cotton",
      price: "440,000",
      discount: "50,000",
      image: ao2,
      link: "/product/2",
    },
    {
      id: 3,
      name: "Áo Polo nam Excool Essentials",
      description: "100% cotton",
      price: "440,000",
      discount: "50,000",
      image: ao3,
      link: "/product/3",
    },
    {
      id: 4,
      name: "Áo Polo nam Excool Essentials",
      description: "100% cotton",
      price: "440,000",
      discount: "50,000",
      image: ao4,
      link: "/product/4",
    },
    {
      id: 5,
      name: "Áo Polo Thể Thao Active Premium",
      description: "100% cotton",
      price: "350,000",
      discount: "30,000",
      image: ao5,
      link: "/product/5",
    },
  ];

  const runningProducts = [
    {
      id: 6,
      name: "Áo Thun Nam Chạy Bộ Graphic Jungle",
      description: "ExDry",
      price: "150,000",
      discount: "50,000",
      image: ao6,
      link: "/product/6",
    },
    {
      id: 7,
      name: "Áo Thun Nam Chạy Bộ Graphic Jungle",
      description: "ExDry",
      price: "150,000",
      discount: "50,000",
      image: ao7,
      link: "/product/7",
    },
    {
      id: 8,
      name: "Áo Thun Nam Chạy Bộ Graphic Jungle",
      description: "ExDry",
      price: "150,000",
      discount: "50,000",
      image: ao8,
      link: "/product/8",
    },
    {
      id: 9,
      name: "Áo Thun Nam Chạy Bộ Graphic Jungle",
      description: "ExDry",
      price: "120,000",
      discount: "50,000",
      image: ao9,
      link: "/product/9",
    },
    {
      id: 10,
      name: "Áo Polo Thể Thao Active Premium",
      description: "ExDry",
      price: "120,000",
      discount: "30,000",
      image: ao10,
      link: "/product/10",
    },
  ];

  return (
    <div>
      <Header />
      <Slider />
      <section className="home-page-hot-products">
        <div className="home-page-container">
          <div className="home-page-row-grid">
            <p className="home-page-heading-text">SẢN PHẨM MỚI</p>
          </div>
          <div className="home-page-row-grid row-grid-hot-products">
            {products.map((product) => (
              <div key={product.id} className="home-page-hot-product-item">
                <a href={product.link}>
                  <img src={product.image} alt={product.name} />
                </a>
                <a href={product.link}>
                  <p>{product.name}</p>
                </a>
                <span>{product.description}</span>
                <div className="home-page-hot-product-item-price">
                  <p>
                    {product.price} <sup>đ</sup>{" "}
                    <span>
                      {product.discount}
                      <sup>đ</sup>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home-page-banner-product">
        <img src={banner1} alt="Đồ Chạy Bộ" />
        <p>ĐỒ CHẠY BỘ</p>
        <span>Trải nghiệm chưa từng có trong mỗi sải chân</span>
        <a href="#">
          <h5>KHÁM PHÁ NGAY</h5>
        </a>
      </section>
      <section className="home-page-hot-products">
        <div className="home-page-container">
          <div className="home-page-row-grid">
            <p className="home-page-heading-text">SẢN PHẨM CHẠY BỘ</p>
          </div>
          <div className="home-page-row-grid row-grid-hot-products">
            {runningProducts.map((product) => (
              <div key={product.id} className="home-page-hot-product-item">
                <a href={product.link}>
                  <img src={product.image} alt={product.name} />
                </a>
                <a href={product.link}>
                  <p>{product.name}</p>
                </a>
                <span>{product.description}</span>
                <div className="home-page-hot-product-item-price">
                  <p>
                    {product.price} <sup>đ</sup>{" "}
                    <span>
                      {product.discount}
                      <sup>đ</sup>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;