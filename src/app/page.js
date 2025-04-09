"use client";

import Image from "next/image";
import { useState,useEffect } from "react";
import "../app/styles/home.css";
import BestSeller from "../app/components/BestSeller"
import Doingubep from "./components/Doingubep";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Header from "./components/Header";
import "../app/styles/FromDatBan.css";
import BannerGrid from "./components/BannerGrid";
import WhyChooseUs from "./components/WhyChooseUS";
import NewPosts from "./components/NewPosts";

const dishes = [
  { id: 1, name: "Salad Nga", price: "99,000đ - 299,000đ", img: "./image/salad.jpg" },
  { id: 2, name: "Salad Dưa Chuột", price: "Liên hệ", img: "./image/saladduachuot.jpg" },
  { id: 3, name: "Salad Bơ Thịt Cua", price: "Liên hệ", img: "./image/saladbo.jpg" },
  { id: 4, name: "Cá Chép Kho Nghệ", price: "Liên hệ", img: "./image/cachepkho.jpg" },
  { id: 5, name: "Bún Bò Huế", price: "Liên hệ", img: "./image/bunbo.jpg" },
  { id: 6, name: "Phở Gà", price: "Liên hệ", img: "./image/phoga.jpg" },
  { id: 7, name: "Chả Giò", price: "Liên hệ", img: "./image/chagio.jpg" },
  { id: 8, name: "Bánh Xèo", price: "Liên hệ", img: "./image/banhxeo.jpg" },
];

const ITEMS_PER_SLIDE = 4;
const TOTAL_SLIDES = Math.ceil(dishes.length / ITEMS_PER_SLIDE) - 1;

export default function Home() {
   const [showBookingForm, setShowBookingForm] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [index, setIndex] = useState(0);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setShowBookingForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // ẩn sau 3s
  };  
  

  const nextSlide = () => {
    if (index < TOTAL_SLIDES) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < TOTAL_SLIDES) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);


  return (
    <div className="container">
     
     <Header />

      {/* Hero Section */}
      <section className="hero">
      <Image src="./image/banner2.jpg" alt="Học nấu ăn gia đình" layout="responsive" width={1375} height={509}  />
        <div className="hero-content">
          <h1>Ẩm Thực Việt Nam</h1>
          <p>Không gì tuyệt vời bằng thưởng thức ẩm thực Việt Nam cùng gia đình và người thân. Chúng tôi cung cấp các món lẩu chuẩn vị ẩm thực Việt Nam mang đến cảm giác quen thuộc nhưng cực kỳ đặc sắc cho bạn thưởng thức</p>
          <button
            className="register-btn"
            onClick={() => setShowBookingForm(true)}
          >
            Đặt Bàn Ngay
          </button>
        </div>
      </section>

           {/* Booking Form Popup */}
           {showBookingForm && (
  <div className="booking-overlay" onClick={() => setShowBookingForm(false)}>
    <div className="booking-form" onClick={(e) => e.stopPropagation()}>
      <h2>Liên hệ đặt bàn</h2>
      <p>
        Quý khách vui lòng đặt bàn trước để chúng tôi sắp xếp cho quý
        khách chỗ ngồi tốt nhất!
      </p>
      <form onSubmit={handleBookingSubmit}>
        <div className="form-grid">
          <div>
            <label>Tên của bạn:</label>
            <input type="text" placeholder="Tên của bạn..." required />
          </div>
          <div>
            <label>Số người:</label>
            <input type="number" placeholder="Số người" required />
          </div>
          <div>
            <label>Số điện thoại của bạn:</label>
            <input type="tel" placeholder="Số điện thoại..." required />
          </div>
          <div>
            <label>Bạn có thể tới dùng bữa ngày nào?</label>
            <input type="date" required />
          </div>
          <div>
            <label>Email của bạn (nếu có):</label>
            <input type="email" placeholder="Email của bạn..." />
          </div>
          <div>
            <label>Thời gian:</label>
            <select required>
              <option value="">Thời gian</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
        </div>
        <p>
          Khách đặt tiệc hội nghị, liên hoan vui lòng gọi trực tiếp:{" "}
          <strong>0909090909</strong>
        </p>
        <button type="submit" className="submit-btn">
          Đặt bàn ngay
        </button>
      </form>
    </div>
  </div>
)}

{showSuccess && (
  <div className="booking-overlay">
    <div className="booking-success animate-success">
      <div className="success-icon">✔</div>
      <h2>🎉 Bạn đã đặt bàn thành công!</h2>
      <p>Chúng tôi sẽ liên hệ xác nhận với bạn sớm nhất.</p>
    </div>
  </div>
)}

  {/* Khóa học nổi bật */}
<section className="courses section-content relative">
  <div className="row row-large align-middle">
    {/* Hình ảnh khóa học */}
    <div className="col col-fix-bottom medium-6 small-12 large-6">
      <div className="col-inner">
        <div className="img has-hover x md-x lg-x y md-y lg-y">
          <div className="img-inner dark">
            <img
              width="620"
              height="400"
              src="https://daubepgiadinh.vn/wp-content/uploads/2020/12/hoc-cach-nau-an-gia-dinh.jpg"
              alt="Học cách nấu ăn gia đình"
              loading="lazy"
              sizes="(max-width: 620px) 100vw, 620px"
              className="attachment-original size-original"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Nội dung khóa học */}
    <div className="col col-fix-bottom col-gtkh medium-6 small-12 large-6">
      <div className="col-inner text-left">
        <div className="text">
          <p className="h2 title-col-img-left">🌿 Giới thiệu về Nhà hàng Vị Mộc Việt</p>
          <p>
          “Mộc” – là sự giản dị, chân thành, không tô vẽ. Là chất liệu tự nhiên, là cái gốc gác thô mộc nhưng đầy sức sống.
          “Việt” – là hồn dân tộc, là bản sắc ẩm thực quê nhà, là những món ăn đi cùng ký ức của bao thế hệ.
          Khi ghép lại, “Mộc Việt” không chỉ là tên gọi, mà là tinh thần mà chúng tôi theo đuổi
          </p>
        </div>
        <a 
          data-animate="fadeInRight"
          rel="nofollow"
          href="Aboutus"
          target="_self"
          className="button success lowercase text-center button-redmore"
          data-animated="true"
        >
          <span>Xem Thêm</span>
          <i className="icon-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>


<section className="daily-dishes">
        <div className="sp-title-header">
          <span>MÓN NGON MỖI NGÀY</span>
        </div>
        <div className="slider-container">
          <button className="arrow left" onClick={prevSlide} disabled={index === 0}>
            &#10094;
          </button>
          <div className="slider" style={{ transform: `translateX(-${index * 100}%)` }}>
            {dishes.map((dish, i) => (
              <div className="dish-card" key={i}>
                <Image src={dish.img} alt={dish.name} width={200} height={150} />
                <h3>{dish.name}</h3>
                <p>Giá: {dish.price}</p>
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide} disabled={index === TOTAL_SLIDES}>
            &#10095;
          </button>
        </div>
      </section>

      <div className="Uudai">
        <h1>Ưu Đãi Đặc Biệt Cho Tháng 4</h1>
      </div>

      {/* Banner Grid Section */}
      <BannerGrid />

      {/* Best Seller Section */}
      <BestSeller />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Đội Ngũ Bếp Section */}
      <Doingubep />

      {/*NewPosts Section */}
      <NewPosts />

      {/* Footer */}
      <Footer />

      <BackToTopButton />
    </div>
  );
}
