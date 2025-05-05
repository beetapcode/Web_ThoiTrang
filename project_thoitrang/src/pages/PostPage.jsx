import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS

// Import ảnh
import logo from "../assets/images/logo.png";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.jpeg";
import post4 from "../assets/images/post4.png";
import postBanner from "../assets/images/post-baner.png";
import gy1 from "../assets/images/gy1.png";
import gy2 from "../assets/images/gy2.png";
import gy3 from "../assets/images/gy3.png";
import gy4 from "../assets/images/gy4.png";
import gy5 from "../assets/images/gy5.png";
import gy6 from "../assets/images/gy6.png";
import gy7 from "../assets/images/gy7.png";
import gy8 from "../assets/images/gy8.png";

const PostPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Khởi tạo AOS với thời gian chuyển động 1200ms
  }, []);

  return (
    <div>
      <Header />
      {/* Bài viết */}
      <section className="posts">
        <div className="post-left" data-aos="fade-right">
          <div className="row-grid">
            <p className="heading-text">XU HƯỚNG THỜI TRANG</p>
          </div>
          <div className="post" data-aos="zoom-in">
            <img src={post1} alt="Post 1" />
            <div className="post-content">
              <a href="#">
                <h3>Kiến thức thời trang / Style Tips</h3>
              </a>
              <p>35+ Cách phối đồ dẫn đầu xu hướng thời trang mùa thu 2024</p>
            </div>
          </div>
          <div className="post" data-aos="zoom-in">
            <img src={post4} alt="Post 4" />
            <div className="post-content">
              <a href="#">
                <h3>Kiến thức thời trang</h3>
              </a>
              <p>Màu đen phối với màu gì? Cách phối đồ màu đen cực cá tính cho GenZ</p>
            </div>
          </div>
          <div className="post" data-aos="zoom-in">
            <img src={post3} alt="Post 3" />
            <div className="post-content">
              <a href="#">
                <h3>Kiến thức thời trang</h3>
              </a>
              <p>Polyurethane là gì? Đặc điểm, Ứng dụng độc đáo trong thời trang</p>
            </div>
          </div>
          <div className="post" data-aos="zoom-in">
            <img src={post2} alt="Post 2" />
            <div className="post-content">
              <a href="#">
                <h3>Xu hướng thời trang</h3>
              </a>
              <p>Điểm danh 5 outfit dẫn đầu xu hướng thời trang giao mùa</p>
            </div>
          </div>
        </div>
        <div className="post-right" data-aos="fade-left">
          <img src={postBanner} alt="Post Banner" />
        </div>
      </section>

      {/* Gợi ý outfit */}
      <div className="content-bst-image">
        <h2
          style={{ fontSize: "18px" }}
          className="sections-heading"
          data-aos="fade-up"
        >
          GỢI Ý OUTFIT
        </h2>
        <div className="image-grid">
          <img src={gy1} alt="Outfit 1" data-aos="flip-left" />
          <img src={gy2} alt="Outfit 2" data-aos="flip-left" />
          <img src={gy3} alt="Outfit 3" data-aos="flip-left" />
          <img src={gy4} alt="Outfit 4" data-aos="flip-left" />
          <img src={gy5} alt="Outfit 5" data-aos="flip-left" />
          <img src={gy6} alt="Outfit 6" data-aos="flip-left" />
          <img src={gy7} alt="Outfit 7" data-aos="flip-left" />
          <img src={gy8} alt="Outfit 8" data-aos="flip-left" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;