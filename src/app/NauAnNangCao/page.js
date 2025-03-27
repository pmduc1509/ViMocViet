"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import "../styles/NauAnCoBan.css";
import BackToTopButton from "../components/BackToTopButton";

const CookingPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-box">
        
        {/* Bên trái: Chi tiết khóa học + Mô tả khóa học */}
        <div className="left-content">
          {/* Chi tiết khóa học */}
          <div className="course-details">
            <div className="course-image">
              <Image src="./image/nau an nang cao.jpg" alt="Bữa Sáng" width={500} height={300} />
            </div>
            <div className="course-content">
              <Image src="./image/cooking 2.png" width={55} height={30} />
              <h1>Khóa Học Nâng Cao</h1>
              <p className="price">1,200,000₫ - 2,800,000₫</p>
              <div className="course-options">
                <label>Chọn hình thức học:</label>
                <select>
                  <option value="">Chọn một tùy chọn</option>
                  <option value="online">Học Online</option>
                  <option value="offline">Học Trực Tiếp</option>
                </select>
              </div>
              <button className="buy-course">Mua khóa học</button>
            </div>
          </div>

                {/* Mô tả khóa học */}
        <div className="course-description">
          <h1>Thông Tin Khóa Học</h1>
          <h2>🌟 Nâng Tầm Bữa Sáng - Chuyên Nghiệp & Đầy Cảm Hứng 🌟</h2>
          <p>
            Bạn luôn mong muốn chuẩn bị những bữa sáng ngon miệng, đầy đủ dinh dưỡng nhưng chưa tìm được phương pháp tối ưu? 
            Bạn đang tìm kiếm một khóa học chuyên sâu để nâng cao kỹ năng nấu ăn hoặc mở rộng mô hình kinh doanh ẩm thực?
          </p>
          
          <p>
            <strong>Khóa học Nấu Ăn Gia Đình - Bếp Gia Đình Hướng Nghiệp Á Âu</strong> chính là lựa chọn hoàn hảo dành cho bạn! 
            Không chỉ giúp bạn nắm vững công thức chế biến các món ăn sáng phổ biến, khóa học còn hướng dẫn kỹ thuật nấu nướng chuyên nghiệp, 
            bí quyết quản lý nguyên liệu và cách sáng tạo thực đơn phong phú.
          </p>

          <h2>✅ Điểm nổi bật của khóa học:</h2>
          <ul>
            <li>-Học cách chế biến <strong>các món ăn sáng đẳng cấp</strong> từ cơ bản đến nâng cao.</li>
            <li>-Cập nhật <strong>công thức và kỹ thuật chế biến chuẩn nhà hàng</strong>.</li>
            <li>-Hướng dẫn <strong>tư duy sáng tạo thực đơn</strong> cho gia đình và kinh doanh.</li>
            <li>-Thực hành với giảng viên giàu kinh nghiệm, áp dụng ngay vào thực tế.</li>
          </ul>
          <p>
            Đăng ký ngay hôm nay để nâng cao chất lượng bữa sáng và tạo dấu ấn riêng trong gian bếp của bạn! 🚀👩‍🍳
          </p>

          {/* Bảng chương trình học */}
          <h1>Chương trình học trực tuyến</h1>
          <table className="course-table">
            <thead>
              <tr>
                <th>TÊN MODULE</th>
                <th>CHUYÊN ĐỀ</th>
                <th>NỘI DUNG CHI TIẾT</th>
                <th>HỌC PHÍ THEO COMBO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3">Bữa sáng thông minh kiểu Việt</td>
                <td>Chuyên đề Cơm chiên – Mì xào</td>
                <td>
                  <ul>
                    <li>Cơm chiên dương châu</li>
                    <li>Cơm chiên hải sản</li>
                    <li>Mì xào thập cẩm</li>
                    <li>Hủ tiếu khô xào bò</li>
                  </ul>
                </td>
                <td rowSpan="3">1.200.000</td>
              </tr>
              <tr>
                <td>Chuyên đề xôi</td>
                <td>
                  <ul>
                    <li>Xôi gà</li>
                    <li>Xôi gấc</li>
                    <li>Xôi xá xíu</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Chuyên đề điểm tâm</td>
                <td>
                  <ul>
                    <li>Bún bò Huế</li>
                    <li>Bún riêu cua</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        {/* Bên phải: Sidebar */}
        <aside className="sidebar">
          <div className="recent-courses">
            <h3>Khóa học đã xem gần đây</h3>
            <ul>
              <li><Link href="#">Bữa Sáng Thông Minh</Link></li>
              <li><Link href="#">Bánh mì hoa cúc</Link></li>
            </ul>
          </div>

          <div className="popular-courses">
            <h3>Khóa học mua nhiều</h3>
            <ul>
              <li><Image src="./image/thit.jpg" width={70} height={50} /><Link href="#">Bánh mì hoa cúc - 199,000₫</Link></li>
              <li><Image src="./image/monan1.jpg" width={70} height={50} /><Link href="#">Bò cuộn phô mai sốt nấm - 199,000₫</Link></li>
              <li><Image src="./image/monan2.jpg" width={70} height={50} /><Link href="#">Giò thủ không khuôn - 200,000₫</Link></li>
              <li><Image src="./image/monan3.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan4.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan5.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan6.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan7.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan8.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan9.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
              <li><Image src="./image/monan10.jpg" width={70} height={50} /><Link href="#">Gói 5 món ngon từ cá và thịt heo - 1,200,000₫</Link></li>
            </ul>
          </div>
        </aside>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default CookingPage;
