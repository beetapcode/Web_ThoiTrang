import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import ảnh
import banner1 from "../assets/images/bannersp1.jpeg";
import banner2 from "../assets/images/bannersp2.jpeg";
import banner3 from "../assets/images/bannersp3.jpeg";
import banner4 from "../assets/images/bannersp4.jpeg";
import banner5 from "../assets/images/bannersp5.jpeg";
import aosm1 from "../assets/images-sp/aosm1.jpeg";
import aosm2 from "../assets/images-sp/aosm2.jpeg";
import aosm3 from "../assets/images-sp/aosm3.jpeg";
import aosm4 from "../assets/images-sp/aosm4.jpeg";
import aosm5 from "../assets/images-sp/aosm5.jpeg";
import aosm7 from "../assets/images-sp/aosm7.jpeg";
import aosm9 from "../assets/images-sp/aosm9.jpeg";
import aosm11 from "../assets/images-sp/aosm11.jpeg";

import "../assets/css/ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả"); // Trạng thái lưu loại sản phẩm được chọn

  const banners = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    // Giả lập dữ liệu sản phẩm
    const data = [
      { id: 1, name: "MASCOT SHIRT - BLOOM", price: "450.000 VNĐ", image: aosm1, category: "Áo Sơmi" },
      { id: 2, name: "MASCOT SHIRT - BLOOM", price: "450.000 VNĐ", image: aosm2, category: "Áo Sơmi" },
      { id: 3, name: "MASCOT SHIRT - BLOOM", price: "450.000 VNĐ", image: aosm3, category: "Áo Sơmi" },
      { id: 4, name: "POCKET CUBAN SHIRT", price: "350.000 VNĐ", image: aosm4, category: "Áo Polo" },
      { id: 5, name: "POCKET CUBAN SHIRT", price: "350.000 VNĐ", image: aosm5, category: "Áo Polo" },
      { id: 6, name: "DOUBLE LAYER SHIRT", price: "400.000 VNĐ", image: aosm7, category: "Áo Thun" },
      { id: 7, name: "FLEXIBLE SHIRT - SMART", price: "450.000 VNĐ", image: aosm9, category: "Áo Thun" },
      { id: 8, name: "NEW YORK SHIRT - SMART", price: "350.000 VNĐ", image: aosm11, category: "Áo Khoác" },
    ];
    setProducts(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3000); // Chuyển đổi slide sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [banners.length]);

  // Lọc sản phẩm theo loại được chọn
  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Header />
      <main>
        {/* Slider */}
        <section className="slider-trangsp">
          <div className="aspect-ratio-169">
            {banners.map((banner, index) => (
              <img
                key={index}
                style={{ width: "100%", display: index === currentSlide ? "block" : "none" }}
                src={banner}
                alt={`Banner ${index + 1}`}
              />
            ))}
          </div>
          <div className="dot-container">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? "active2" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </section>

        {/* Danh mục */}
        <section className="danhmuc">
          <div className="container">
            <div className="row-grid">
              <p className="heading-text">DANH MỤC</p>
            </div>
            <div className="product-row-grid">
              <ul className="product-categories">
                <div className="column">
                  <li onClick={() => setSelectedCategory("Áo Sơmi")}><a href="#">ÁO SƠMI</a></li><br />
                  <li onClick={() => setSelectedCategory("Áo Polo")}><a href="#">ÁO POLO</a></li><br />
                  <li onClick={() => setSelectedCategory("Áo Thun")}><a href="#">ÁO THUN</a></li>
                </div>
                <div className="column">
                  <li onClick={() => setSelectedCategory("Áo Khoác")}><a href="#">ÁO KHOÁC</a></li><br />
                  <li onClick={() => setSelectedCategory("Quần Jeans")}><a href="#">QUẦN JEANS</a></li><br />
                  <li onClick={() => setSelectedCategory("Quần Short")}><a href="#">QUẦN SHORT</a></li>
                </div>
                <div className="column">
                  <li onClick={() => setSelectedCategory("Quần Boxing")}><a href="#">QUẦN BOXING</a></li><br />
                  <li onClick={() => setSelectedCategory("Phụ Kiện")}><a href="#">PHỤ KIỆN</a></li><br />
                  <li onClick={() => setSelectedCategory("Giày")}><a href="#">GIÀY</a></li>
                </div>
              </ul>
            </div>
          </div>
        </section>

        {/* Sản phẩm */}
        <section id="sanpham">
          <div className="container">
            <div className="row-grid">
              <p className="heading-text">SẢN PHẨM</p>
            </div>
            <div className="products-content-container">
              <div className="products-collect-content">
                <div className="products-content-items">
                  <ul className="products">
                    {filteredProducts.map((product) => (
                      <li key={product.id}>
                        <div className="product-item">
                          <div className="product-top">
                            <a href="#" className="product-thumb">
                              <img src={product.image} alt={product.name} />
                            </a>
                            <Link
                              to={`/product-info/${product.id}`}
                              className="buy-now"
                              state={{ product }}
                            >
                              Mua ngay
                            </Link>
                          </div>
                          <div className="product-info">
                            <a href="#" className="product-name">{product.name}</a>
                            <div className="product-price">{product.price}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="products-content-container">
              <div className="products-collect-content">
                <div className="products-content-items">
                  <ul className="products">
                    {filteredProducts.map((product) => (
                      <li key={product.id}>
                        <div className="product-item">
                          <div className="product-top">
                            <a href="#" className="product-thumb">
                              <img src={product.image} alt={product.name} />
                            </a>
                            <Link
                              to={`/product-info/${product.id}`}
                              className="buy-now"
                              state={{ product }}
                            >
                              Mua ngay
                            </Link>
                          </div>
                          <div className="product-info">
                            <a href="#" className="product-name">{product.name}</a>
                            <div className="product-price">{product.price}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="products-content-container">
              <div className="products-collect-content">
                <div className="products-content-items">
                  <ul className="products">
                    {filteredProducts.map((product) => (
                      <li key={product.id}>
                        <div className="product-item">
                          <div className="product-top">
                            <a href="#" className="product-thumb">
                              <img src={product.image} alt={product.name} />
                            </a>
                            <Link
                              to={`/product-info/${product.id}`}
                              className="buy-now"
                              state={{ product }}
                            >
                              Mua ngay
                            </Link>
                          </div>
                          <div className="product-info">
                            <a href="#" className="product-name">{product.name}</a>
                            <div className="product-price">{product.price}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;