"use client";

import Image from "next/image";
import Header from "../components/Header";
import "../styles/Aboutus.css"; 
import Footer from "../components/Footer";
import Counters from "../components/Counter";


const Aboutus = () => {
    return (
      <>
        <div className="aboutus-container">
          <Header />
  
          {/* Hero Section */}
          <div className="hero-section"></div>
  
          <div className="content-container">
            {/* Tiêu đề giới thiệu */}
            <h2 className="title">Giới Thiệu</h2>
  
            {/* Kim chỉ nam hoạt động */}
            <div className="guidelines">
              <h3>KIM CHỈ NAM HOẠT ĐỘNG CỦA Vị Mộc Việt</h3>
              <ul>
                <li>1. CHẤT LƯỢNG & TỐC ĐỘ</li>
                <li>2. NIỀM TIN</li>
                <li>3. TIỆN LỢI & DỄ DÀNG</li>
                <li>4. GIÁ TỐT CHO NGƯỜI DÙNG</li>
              </ul>
            </div>
  
            {/* Phần mô tả */}
            <div className="description">
              <div className="image-container">
                <Image
                  src="./image/comtam2.webp"
                  alt="Cơm tấm ngon"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-container">
                <h3>01. CHÚNG TÔI - ĐỘI NGŨ Vị Mộc Việt ĐANG LÀM GÌ?</h3>
                <hr />
                <p>
                  Chúng tôi – Đội ngũ Vị Mộc Việt đề cao sứ mệnh “Sự hài lòng của khách
                  hàng là ưu tiên số 1”, lấy khách hàng làm trung tâm, sẵn sàng đáp
                  ứng mọi kỳ vọng của khách hàng. Tính kỷ luật cao trong sản phẩm là
                  yêu cầu bắt buộc đối với tất cả các bộ phận tại Vị Mộc Việt.
                </p>
              </div>
            </div>
             {/* Phần mô tả */}
            <div className="about-description">
            <div className="text-container">
                <h3>02. LIÊN HỆ VỚI CHÚNG TÔI</h3>
                <hr />
                <p>
                Nhằm hướng đến sự tiện lợi cho quý khách hàng của Delichi, chúng tôi không ngừng nỗ lực phát triển và mở rộng. Hiện nay, Delichi đã có mặt tại hầu hết tất cả các quận tại Hà Nội và thành phố Hồ Chí Minh. Bằng cách tìm kiếm từ khoá “Delichi” trên app đặt đồ ăn (Grab, Beamin, Shopee Food, BeFood, Gojek), ngay lập tức bạn sẽ tìm thấy chúng tôi. Với đơn hàng số lượng lớn, hãy liên hệ với chúng tôi qua Fanpage hoặc Website nhé. Nhân viên của chúng tôi vẫn luôn ở đây đợi bạn. Có thể bạn đang lăn tăn về giá? Đừng lo, hãy thử đặt hàng và trải nghiệm bữa ăn mà đội ngũ chúng tôi đã tận tậm chuẩn bị. Chất lượng món ăn chắc chắn sẽ xứng đáng với số tiền mà bạn chi trả.
                </p>
            </div>
            <div className="image-container">
                <Image
                  src="./image/comtam3.webp"
                  alt="Cơm tấm ngon"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <Counters />

        {/* Footer */}
        <Footer />
      </>
    );
  };
  

export default Aboutus;
