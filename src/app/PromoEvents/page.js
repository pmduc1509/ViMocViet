"use client"

import React from "react";
import "../styles/PromoEvents.css";
import Header from"../components/Header";
import CounterForEvent from "../components/CounterForEvent";
import Footer from "../components/Footer";

const PromoEvents = () => {
  return (
    <div className="promo-events">
      
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Ưu đãi đặc biệt tháng 4 này!</h1>
          <p>Khám phá các chương trình khuyến mãi và sự kiện hấp dẫn từ chúng tôi.</p>
        </div>
      </section>

      <section className="daily-deals">
        <h2>Chương Trình Khuyến Mãi</h2>
        <div className="cards">
          <div className="card">
            <img src="./image/comjd.jpg" alt="Pizza" />
            <h3>Bữa cơm đoàn viên</h3>
            <p>Áp dụng từ 10/04 đến 20/04</p>
          </div>
          <div className="card">
            <img src="/image/comga.jpg" alt="Combo" />
            <h3>Combo Đặc Biệt</h3>
            <p>Áp dụng đến hết 30/4 – Giảm 20% cho nhóm từ 4 người trở lên vào khung giờ 17h00–19h00 mỗi ngày.</p>
          </div>
          <div className="card">
            <img src="/image/salad.jpg" alt="Salad" />
            <h3>Miễn Phí Salad</h3>
            <p>Với mỗi hóa đơn trên 100.000đ</p>
          </div>
        </div>
      </section>

      <CounterForEvent />

      <section className="events">
        <h2>Sự Kiện Sắp Tới</h2>
        <ul>
          <li>
            <strong>Ngày Hội Pizza:</strong> Thử các loại pizza mới vào 1515/04.
          </li>
          <li>
            <strong>Workshop Ẩm Thực:</strong> Cùng học nấu ăn cùng đầu bếp vào 30/044.
          </li>
          <li>
            <strong>Cuộc Thi Ăn Nhanh:</strong> Thử thách hấp dẫn với phần thưởng lớn 29/04.
          </li>
        </ul>
      </section>

     <Footer />
    </div>
  );
};

export default PromoEvents;
