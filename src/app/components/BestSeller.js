import styles from "../styles/BestSeller.css";
import Image from "next/image";

const BestSeller = () => {
  return (
<section className="why-choose-section">
  <h2>MÓN ĂN ĐƯỢC BÁN CHẠY NHẤT</h2>
  <p>Món ăn của mọi gia đình</p>

  <div className="why-choose-container">
    {/* Cột bên trái */}
    <div className="why-choose-content">
      <div className="why-choose-item">
        
        <h3>📌Số lượng đã bán</h3>
        <p>🔥 Hơn 10,000 suất được bán ra mỗi tháng, minh chứng cho độ hot của món ăn này!</p>
      </div>
      <div className="why-choose-item">
        
        <h3>🌟 Đánh giá từ khách hàng</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 từ hơn 5,000 lượt đánh giá) – Được yêu thích bởi hương vị truyền thống và chất lượng tuyệt hảo.</p>
      </div>
    </div>

    {/* Ảnh ở giữa */}
    <div className="why-choose-image">
      <img src="./image/thit.jpg" alt="Hình ảnh món ăn" />
    </div>

    {/* Cột bên phải */}
    <div className="why-choose-content">
      <div className="why-choose-item">
        
        <h3>🥩 Nguyên liệu tươi ngon</h3>
        <p>Sử dụng thịt ba chỉ thượng hạng, trứng gà ta và nước dừa tươi giúp thịt mềm, béo nhưng không ngấy.</p>
      </div>
      <div className="why-choose-item">
        
        <h3>👨‍🍳 Bí quyết chế biến đặc biệt</h3>
        <p>Thịt được tẩm ướp theo công thức gia truyền, kho chậm trong nhiều giờ để đạt được độ mềm hoàn hảo.</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default BestSeller;
