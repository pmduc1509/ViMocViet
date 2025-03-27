import Image from "next/image";
import "../styles/Doingubep.css"

const Doingubep = () => {
  const doiNgubep = [
    {
      name: "ĐB. Đặng Đình Thiết",
      role: "Bếp Trưởng Nhà Hàng Đặc Sản Phương Nam",
      image: "./image/DaubepA.jpg",
    },
    {
      name: "ĐB. Đỗ Xuân Trinh",
      role: "Bếp Trưởng Trung Tâm Hội Nghị Tiệc Cưới Grand Palace",
      image: "./image/DaubepB.jpg",
    },
    {
      name: "ĐB. Chu Văn Hương",
      role: "Bếp Trưởng Nhà Hàng Biển Xanh",
      image: "./image/DaubepC.jpg",
    },
  ];

  return (
    <div className="daubep-section">
      <h2 className="section-title">ĐỘI NGŨ BẾP</h2>
      <div className="doingubep-list">
        {doiNgubep.map((Db, index) => (
          <div className="doingubep-card" key={index}>
            <Image src={Db.image} alt={Db.name} width={300} height={200} />
            <h3 className="daubep-name">{Db.name}</h3>
            <p className="daubep-role">{Db.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doingubep;
