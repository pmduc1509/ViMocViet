"use client";

import Image from "next/image";
import { useState,useEffect } from "react";
import "../app/styles/home.css";
import BestSeller from "../app/components/BestSeller"
import Doingubep from "./components/Doingubep";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Header from "./components/Header";


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
  const [dropdown, setDropdown] = useState(null);
  const [index, setIndex] = useState(0);

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
          <h1>HỌC NẤU ĂN GIA ĐÌNH</h1>
          <p>Trải nghiệm khóa học chuyên nghiệp, dễ dàng áp dụng vào cuộc sống.</p>
          <button className="register-btn">ĐĂNG KÝ HỌC</button>
        </div>
      </section>

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
          <p className="h2 title-col-img-left">Khóa học Bếp Gia Đình</p>
          <p>
            Khóa học nấu ăn gia đình giúp bạn tự tin trổ tài nấu nướng chỉ trong 3 buổi học. 
            Dành tặng cho người thân, gia đình, bạn bè những món ăn thơm ngon, đậm đà.
          </p>
        </div>
        <a 
          data-animate="fadeInRight"
          rel="nofollow"
          href="/NauAnCoBan"
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
                <button className="buy-btn">ĐẶT MÓN</button>
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide} disabled={index === TOTAL_SLIDES}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Best Seller Section */}
      <BestSeller />

      {/* Đội Ngũ Bếp Section */}
      <Doingubep />

      {/* Footer */}
      <Footer />

      <BackToTopButton />
    </div>
  );
}
