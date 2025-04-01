"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/Checkout.css"

const CartCheckout = () => {
  const [selectedMethod, setSelectedMethod] = useState(""); 

  const selectMethod = (method) => {
    console.log("Phương thức thanh toán đã chọn:", method);
    setSelectedMethod(method);
  };
  

  return (
    
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <div className="main-logo">
          <a href="/">
            <img
              src="./Image/logo.png"
              alt="logo"
              className="img-fluid"
              style={{ height: "auto" }}
            />
          </a>
        </div>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0"></div>
        </div>
      </nav>

      {/* Checkout Form */}
      <div className="container wrapper">
        <div className="cart-body d-flex justify-content-between">
          {/* Left Column */}
          <div className="left-column">
            <div className="panel">
              <div className="panel-heading">Địa chỉ của bạn</div>
              <div className="panel-body">
                <div className="form-group">
                  <label>Tên của bạn là:</label>
                  <input type="text" name="first_name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Địa chỉ của bạn là:</label>
                  <input type="text" name="address" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Số điện thoại của bạn:</label>
                  <input type="text" name="phone_number" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Địa chỉ Email của bạn:</label>
                  <input type="text" name="email_address" className="form-control" />
                </div>
              </div>
            </div>

            <div className="panel">
      <div className="panel-heading">Phương thức thanh toán</div>
      <div className="panel-body">
        <div className="payment-method">
          {[
            { id: "card", img: "./Image/creditCard.png", method: "Thẻ ngân hàng" },
            { id: "cash", img: "./Image/Thanhtoan.jpg", method: "Tiền mặt" },
            { id: "momo", img: "./Image/MoMo_Logo.png", method: "MoMo" }
          ].map(({ id, img, method }) => (
            <div
              key={id}
              className={`payment-option ${selectedMethod === id ? "selected" : ""}`}
              onClick={() => selectMethod(id)}
            >
              <img src={img} alt={method} />
              <p>{method}</p>
            </div>
          ))}
        </div>

        {/* Hiển thị nội dung tương ứng với phương thức đã chọn */}
        {selectedMethod && (
          <div className={`payment-detail showPayment`}>
            {selectedMethod === "card" && (
              <div className="card-form">
                <h4>Nhập thông tin thẻ</h4>
                <label htmlFor="card-holder-name">Tên chủ thẻ:</label>
                <input type="text" id="card-holder-name" className="form-control" placeholder="" />

                <label htmlFor="card-number">Số thẻ:</label>
                <input type="text" id="card-number" className="form-control" placeholder="" />

                <label htmlFor="card-expiry">Ngày hết hạn (MM/YY):</label>
                <input type="text" id="card-expiry" className="form-control" placeholder="" />

                <label htmlFor="card-cvc">CVV:</label>
                <input type="text" id="card-cvc" className="form-control" placeholder="" />

                <button className="payment-button" onClick={() => alert("Thanh toán bằng thẻ thành công!")}>
                  Thanh toán bằng thẻ
                </button>
              </div>
            )}

            {selectedMethod === "cash" && (
              <div className="cash-info">
                <h4>Thanh toán khi nhận hàng</h4>
                <p>Bạn sẽ thanh toán khi khóa học kết thúc.</p>
                <button className="payment-button" onClick={() => alert("Thanh toán bằng thẻ thành công!")}>
                  Thanh toán bằng thẻ
                </button>
              </div>
            )}

            {selectedMethod === "momo" && (
              <div className="momo-info">
                <h4>Thanh toán bằng Mã QR</h4>
                <img src="./Image/images.png" alt="MoMo QR Code" style={{ width: "100%" }} />
              </div>
            )}
          </div>
        )} 
      </div>
    </div>
  </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="panel">
              <div className="panel-heading">Đơn hàng của bạn</div>
              <div className="review-item">
                <img src="./image/thit.jpg" alt="Món ăn" className="review-image" />
                <div className="review-content">
                    <div>Món ăn 1</div>
                    <div>100.000đ</div>
                </div>
              </div>
              <div className="review-item">
                <img src="./image/thit.jpg" alt="Món ăn" className="review-image" />
                <div className="review-content">
                    <div>Món ăn 1</div>
                    <div>100.000đ</div>
                </div>
              </div><div className="review-item">
                <img src="./image/thit.jpg" alt="Món ăn" className="review-image" />
                <div className="review-content">
                    <div>Món ăn 1</div>
                    <div>100.000đ</div>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">Phương thức giao hàng</div>
              <div className="ship-method-container">
                {[{
                  id: "standard", img: "./Image/truck.png", name: "Tiết kiệm", days: "5 - 10 Ngày", price: "35.000đ"
                }, {
                  id: "priority", img: "./Image/delivery-truck.png", name: "Chuyển phát nhanh", days: "3 - 4 Ngày", price: "87.000đ"
                }, {
                  id: "overnight", img: "./Image/fast-delivery.png", name: "Hỏa tốc", days: "1 - 2 Ngày", price: "110.000đ"
                }].map(({ id, img, name, days, price }) => (
                  <div key={id} className="ship-method" id={id}>
                    <button type="button" className="w-100">
                      <div className="ship-box d-flex align-items-center">
                        <div className="ship-img">
                          <img src={img} alt="" style={{ width: "40%" }} />
                        </div>
                        <div className="ship-name">
                          <span>{name}</span>
                        </div>
                        <div className="ship-day">
                          <span>{days}</span>
                        </div>
                        <div className="ship-price">
                          <span>{price}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;