"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import "../styles/MenuBuaSang.css";
import { useState } from "react";
import BackToTopButton from "../components/BackToTopButton";

const dishes = [
  { id: 1, name: "Cơm Tấm", price: "99,000đ - 299,000đ", img: "./image/comtam.jpg" },
  { id: 2, name: "Bún Bò Huế", price: "Liên hệ", img: "./image/bunbo.jpg" },
  { id: 3, name: "Bún Thịt Nướng", price: "Liên hệ", img: "./image/bunthitnuong.jpg" },
  { id: 4, name: "Cháo Lòng", price: "Liên hệ", img: "./image/chaolong.jpg" },
  { id: 5, name: "Phở Bò", price: "Liên hệ", img: "./image/phobo.jpg" },
  { id: 6, name: "Bánh Mì", price: "Liên hệ", img: "./image/banhmi.jpg" },
];

const recentDishes = [
  { id: 7, name: "Mực Xào Dưa Leo", price: "Liên hệ", img: "./image/monan1.jpg" },
  { id: 8, name: "Bắp Cải Xào", price: "Liên hệ", img: "./image/monan1.jpg" },
  { id: 9, name: "Ốc Hương Xào", price: "Liên hệ", img: "./image/monan1.jpg" },
  { id: 10, name: "Nấm Xào", price: "Liên hệ", img: "./image/monan1.jpg" },
  { id: 11, name: "Đậu Hà Lan Xào", price: "Liên hệ", img: "./image/monan1.jpg" },
  { id: 12, name: "Bún Gạo Xào", price: "Liên hệ", img: "./image/monan1.jpg" },
];

const CookingPage = () => {
    const [price, setPrice] = useState(0);
  return (
    <div className="container">
      <Header />

      {/* Hero Section */}
      <div className="hero-image-archive">
        <div className="row">
          <div className="hero-text-archive">
            <h1 className="page-title is-large uppercase">
              <span>Món Ăn Sáng</span>
            </h1>
            <div className="entry-divider is-divider small"></div>
          </div>
        </div>
        <div className="effect-sparkle fill no-click"></div>
      </div>
      
      <div className="content">
        {/* Danh sách món ăn dạng lưới */}
        <section className="menu-grid">
          <h2>Món Ngon Mỗi Ngày</h2>
          <div className="grid-container">
            {dishes.map((dish) => (
              <div className="dish-card" key={dish.id}>
                <Image src={dish.img} alt={dish.name} width={250} height={180} />
                <h3>{dish.name}</h3>
                <p className="price">Giá: {dish.price}</p>
                <button className="buy-btn">MUA KHÓA HỌC</button>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar bên phải */}
        <aside className="sidebar">
          <h3>KHÓA HỌC ĐÃ XEM GẦN ĐÂY</h3>
          <ul className="recent-list">
            {recentDishes.map((dish) => (
              <li key={dish.id}>
                <Image src={dish.img} alt={dish.name} width={70} height={50} />
                <div>
                  <Link href="#">{dish.name}</Link>
                  <p className="price">{dish.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="filter-price">
            <h3>LỌC THEO GIÁ</h3>
            <input 
                type="range" 
                min="0" 
                max="299000" 
                step="1000" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <span className="price-label">{price.toLocaleString()}đ</span>
            <button className="filter-btn">LỌC</button>
          </div>
        </aside>
      </div>
      <BackToTopButton />
    </div>
  );
};



export default CookingPage;
