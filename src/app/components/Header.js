import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/home.css"
import "../styles/CartPopup.css";


const HeaderNav = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  

  // Danh sách sản phẩm trong giỏ hàng (dữ liệu mẫu)
  const cartItems = [
    { id: 1, name: "Món ăn 1", price: "100.000", image: "./image/thit.jpg" },
    { id: 2, name: "Món ăn 2", price: "150.000", image: "./image/thit.jpg" },
  ];

  const goToCheckout = () => {
    window.location.href = "/Checkout";
};

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
        <div
          className="cart-container"
          onMouseEnter={() => setIsPopupVisible(true)}
          onMouseLeave={() => setIsPopupVisible(false)}
        >
          <button className="cart-btn" style={{ fontSize: "20px", padding: "10px" }} onClick={goToCheckout}>
            <FaShoppingCart style={{ marginRight: "3px" }} />
          </button>
          {/* Popup giỏ hàng */}
          {isPopupVisible && (
            <div className="cart-popup">
              <div className="cart-popup-content">
                {cartItems.length === 0 ? (
                  <p>Chưa có sản phẩm trong giỏ hàng.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <p>{item.name}</p>
                        <p>{item.price}đ</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <Link href="/">TRANG CHỦ</Link>

        <div className="nav-item">
          <Link href="/PromoEvents">SỰ KIỆN</Link>
        </div>

        <div className="nav-item">
          <Link href="">MENU</Link>
          <div className="dropdown">
            <Link href="/MenuBuaSang">Bữa sáng</Link>
            <Link href="/MenuBuaToi">Bữa tối</Link>
          </div>
        </div>

        <div className="nav-item">
          <Link href="/Aboutus">GIỚI THIỆU</Link>
        </div>

        <div className="nav-item">
          <Link href="/Blog">BLOG</Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
