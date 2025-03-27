import Link from "next/link";
import "../styles/Footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">HƯỚNG NGHIỆP Á ÂU</h3>
          <div className="footer-divider"></div>
          <h4 className="footer-subtitle">Hệ Thống Chi Nhánh</h4>
          <ul className="footer-list">
            <li><strong>HỒ CHÍ MINH</strong>: 259B Hai Bà Trưng, Q.3 | (028) 3820 8788</li>
            <li><strong>HÀ NỘI</strong>: 100 Khúc Thừa Dụ, Q. Cầu Giấy | 1800 6148</li>
            <li><strong>ĐÀ NẴNG</strong>: 304 Điện Biên Phủ, Q.Thanh Khê | (0236) 3739 988</li>
            <li><strong>ĐỒNG NAI</strong>: O13 - O14 Đồng Khởi, P.Tam Hòa | 1800 6148</li>
            <li><strong>BÌNH DƯƠNG</strong>: 153 Ngô Gia Tự, P. Chánh Nghĩa | 027 4388 6148</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">THÔNG TIN</h3>
          <div className="footer-divider"></div>
          <ul className="footer-list">
            <li>Tổng đài tư vấn: <strong>1800 6148</strong> (08h00 - 20h00)</li>
            <li>Góp ý phản ánh: <strong>028 7109 9232</strong></li>
            <li>Email: <a href="mailto:gopy@huongnghiepaau.com">gopy@huongnghiepaau.com</a></li>
            <li>Thời gian hoạt động: Thứ 2 - Thứ 7 (08h00 - 20h00)</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">LIÊN KẾT HỮU ÍCH</h3>
          <div className="footer-divider"></div>
          <ul className="footer-links">
            <li><Link href="/gioi-thieu">Giới Thiệu</Link></li>
          </ul>
          <h3 className="footer-title">MẠNG XÃ HỘI</h3>
            <div className="footer-divider"></div>
            <div className="footer-socials">
            <a href="https://www.facebook.com/daubepgiadinhvn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/daubepgiadinhvn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCuqXbKkAj-nw6NizVZ57l7g" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
