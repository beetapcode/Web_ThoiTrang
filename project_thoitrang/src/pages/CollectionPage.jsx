import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS

// Import ảnh
import bst2 from "../assets/images/bst2.png";
import bst3 from "../assets/images/bst3.png";
import bst4 from "../assets/images/bst4.png";
import baner2 from "../assets/images/baner2.jpg";
import bst1 from "../assets/images/bst-1.png";
import bst5 from "../assets/images/bst-5.png";
import bst6 from "../assets/images/bst-6.png";
import bst7 from "../assets/images/bst-7.png";
import bst8 from "../assets/images/bst-8.png";
import bst9 from "../assets/images/bst-9.png";
import bst10 from "../assets/images/bst-10.png";
import bst11 from "../assets/images/bst-11.png";
import bst12 from "../assets/images/bst-12.png";

const CollectionPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Khởi tạo AOS với thời gian chuyển động 1200ms
  }, []);

  return (
    <div>
      <Header />
      {/* Bộ sưu tập */}
      <section className="bosutap">
        <div id="content-left" data-aos="fade-right">
          <div className="content-sections">
            <div className="row-grid">
              <p className="heading-text">THE BRAND</p>
            </div>
            <p style={{ fontSize: "18px" }} className="sections-sub-heading">
              Routine
            </p>
            <p className="bosuutap-text">
              Sứ mệnh của Routine là Cổ vũ cho thế hệ trẻ toàn thế giới tự do
              thể hiện phong cách thông qua thời trang, thương hiệu vượt qua
              ranh giới của thời trang đường phố bằng cách không ngừng sáng tạo
              các trang phục trong các bộ sưu tập độc đáo. Routine mong muốn
              đồng hành và tôn vinh thế hệ trẻ tài năng qua những xu hướng thời
              trang và hoạt động cộng đồng sáng tạo. Từ đó tạo dấu ấn cho giá
              trị bền vững để cùng các tài năng trẻ phát triển.
            </p>
            <div className="list-bosuutap">
              <img src={bst2} alt="Bộ sưu tập 2" data-aos="zoom-in" />
              <img src={bst3} alt="Bộ sưu tập 3" data-aos="zoom-in" />
              <img src={bst4} alt="Bộ sưu tập 4" data-aos="zoom-in" />
            </div>
          </div>
        </div>
        <div className="content-right" data-aos="fade-left">
          <img src={baner2} alt="Banner" />
        </div>
      </section>

      {/* Hình ảnh bộ sưu tập */}
      <div className="content-bst-image">
        <h2
          style={{ fontSize: "18px" }}
          className="sections-heading"
          data-aos="fade-up"
        >
          BỘ SƯU TẬP
        </h2>
        <div className="image-grid">
          <img src={bst1} alt="Bộ sưu tập 1" data-aos="flip-left" />
          <img src={bst2} alt="Bộ sưu tập 2" data-aos="flip-left" />
          <img src={bst3} alt="Bộ sưu tập 3" data-aos="flip-left" />
          <img src={bst4} alt="Bộ sưu tập 4" data-aos="flip-left" />
          <img src={bst5} alt="Bộ sưu tập 5" data-aos="flip-left" />
          <img src={bst6} alt="Bộ sưu tập 6" data-aos="flip-left" />
          <img src={bst7} alt="Bộ sưu tập 7" data-aos="flip-left" />
          <img src={bst8} alt="Bộ sưu tập 8" data-aos="flip-left" />
          <img src={bst9} alt="Bộ sưu tập 9" data-aos="flip-left" />
          <img src={bst10} alt="Bộ sưu tập 10" data-aos="flip-left" />
          <img src={bst11} alt="Bộ sưu tập 11" data-aos="flip-left" />
          <img src={bst12} alt="Bộ sưu tập 12" data-aos="flip-left" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionPage;