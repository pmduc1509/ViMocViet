"use client";

import Image from "next/image";
import "../styles/Counter.css"; 

const countersData = [
  {
    imgSrc: "./image/iconmenu.png",
    value: "+ 50",
    text: "Thực đơn đa dạng",
  },
  {
    imgSrc: "./image/iconbungbe.webp",
    value: "+ 1000",
    text: "Khách hàng mỗi ngày",
  },
  {
    imgSrc: "./image/iconcooking.webp",
    value: "+ 10",
    text: "Năm kinh nghiệm",
  },
];

const Counters = () => {
  return (
    <section className="section-index-counters">
      <div className="container">
        <div className="list-counters">
          {countersData.map((item, index) => (
            <div className="counters-item" key={index}>
              <div className="counters-item__inner">
                <div className="counters-img">
                  <Image
                    src={item.imgSrc}
                    alt={item.text}
                    width={80}
                    height={80}
                    className="lazyloaded"
                  />
                </div>
                <div className="counters-info">
                  <p className="value">{item.value}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
