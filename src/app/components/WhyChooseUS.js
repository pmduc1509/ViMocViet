
export default function WhyChooseUs() {
  return (
      <section className="relative text-white min-h-[600px] overflow-hidden">
      {/* Ảnh nền */}
      <img
        src="/Image/banner4.png"
        alt="Ảnh nền nhà hàng"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    
      {/* Overlay đen mờ */}
      <div className="absolute inset-0 bg-black z-[1]" style={{ opacity: 0.5 }}></div>
    
      {/* Nội dung chính */}
      <div className="relative z-[2] max-w-screen-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-normal italic mb-4 tracking-wide"style={{ fontFamily: '"Lobster", sans-serif' }}>
          Tại sao nên chọn Nhà hàng Vị Mộc Việt
        </h2>
    
        <p className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto mb-14 leading-relaxed">
          Thực đơn lẩu chuẩn vị Việt Nam có hơn 50 món do chính tay đầu bếp giàu kinh nghiệm lựa chọn, 
          được dọn lên theo trình tự súp khai vị, món nướng, món nước, món canh, lẩu, chè và trái cây tráng miệng 
          để thực khách thưởng thức trọn vẹn tất cả các loại món mà không cảm thấy quá no, 
          thay vào đó chỉ còn lại hương vị thơm ngon cùng chất dinh dưỡng đặc biệt trong từng món ăn 
          sẽ làm cho thực khách nhớ mãi.
        </p>
    
        {/* Các ưu điểm */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 mt-4">
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/fresh.png" title="Sản phẩm luôn luôn tươi sống" />
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/online-order.png" title="Hỗ trợ đặt hàng Online dễ dàng" />
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/FREE-WIFI.png" title="Sóng wifi mạnh phủ khắp nhà hàng" />
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/free-parking.png" title="Có chỗ đậu xe ô tô miễn phí" />
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/ship-tan-nha.png" title="Giao hàng tận nơi với các đơn Online" />
          <Feature icon="https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/phong-hoi-truong.png" title="Có phòng lớn tổ chức hội nghị" />
        </div>
      </div>
    </section>  
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <img src={icon} alt={title} className="w-14 h-14 mb-3" />
      <p className="text-sm md:text-base font-medium leading-snug">{title}</p>
    </div>
  );
}
