import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa"; 
import "../styles/BackToTopButton.css"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 40;
    let scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10); // Cập nhật mỗi 10ms
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <FaAngleUp /> {/* Icon mũi tên hướng lên */}
    </button>
  );
};

export default BackToTopButton;
