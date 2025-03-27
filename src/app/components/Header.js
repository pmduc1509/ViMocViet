import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/home.css"

const HeaderNav = () => {
  return (
    <div className="container">
      <Head>
        <title>Đầu Bếp Gia Đình</title>
        <meta name="description" content="Trang web chia sẻ công thức nấu ăn gia đình." />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="logo-search">
          <Link href="/"><Image src="./image/logo.png" alt="Logo" width={240} height={120} className="logo-image" /></Link>
          <input type="text" placeholder="Tìm kiếm công thức..." className="search-bar" />
        </div>
        <button className="cart-btn" style={{ fontSize: "20px", padding: "10px" }}>
          <FaShoppingCart style={{ marginRight: "3px" }} />
        </button>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <Link href="/">TRANG CHỦ</Link>

        <div className="nav-item">
          <Link href="">HỌC NẤU ĂN</Link>
          <div className="dropdown">
            <Link href="/NauAnCoBan">Khóa cơ bản</Link>
            <Link href="/NauAnNangCao">Khóa nâng cao</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link href="">MENU</Link>
          <div className="dropdown">
            <Link href="/MenuBuaSang">Bữa sáng</Link>
            <Link href="/MenuBuaToi">Bữa tối</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link href="">SỨC KHỎE</Link>
          <div className="dropdown">
            <Link href="/health/nutrition">Dinh dưỡng</Link>
            <Link href="/health/fitness">Thể chất</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link href="">BLOG</Link>
          <div className="dropdown">
            <Link href="/blog/tips">Mẹo vặt</Link>
            <Link href="/blog/stories">Câu chuyện</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
