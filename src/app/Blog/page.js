"use client";

import React from "react";
import "../styles/Blog.css";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "5 phẩm chất của một người quản lý dự án thành công",
    author: "Nguyễn Văn Hưng",
    date: "21 Tháng 3, 2023",
    readTime: "1 phút đọc",
    image: "./image/thit.jpg",
    likes: 20,
    comments: 2,
    views: 135,
    commentContent: "Bài viết rất bổ ích! Mình đang làm quản lý dự án và thấy nội dung phản ánh khá đúng với thực tế công việc."
  },
  {
    id: 2,
    title: "10 vật dụng cần thiết cho doanh nhân thường xuyên đi công tác",
    author: "Lê Thị Mai",
    date: "21 Tháng 3, 2023",
    readTime: "2 phút đọc",
    image: "./image/thit.jpg",
    likes: 22,
    comments: 1,
    views: 198,
    commentContent: "Mình đã từng bỏ quên vài món đồ trong danh sách này khi đi công tác. Bài viết này rất hữu ích!"
  },
  {
    id: 3,
    title: "Chân dung nhà đầu tư công nghệ Paul Dooby",
    author: "Trần Minh Đức",
    date: "21 Tháng 3, 2023",
    readTime: "1 phút đọc",
    image: "./image/thit.jpg",
    likes: 6,
    comments: 1,
    views: 80,
    commentContent: "Mình chưa từng nghe tới ông Paul này, nhưng bài viết khá truyền cảm hứng cho những ai đang muốn khởi nghiệp trong lĩnh vực công nghệ."
  },
  {
    id: 4,
    title: "Mẹo kinh doanh: Làm sao để thu hút nhà đầu tư?",
    author: "Phạm Thảo Nguyên",
    date: "21 Tháng 3, 2023",
    readTime: "1 phút đọc",
    image: "./image/thit.jpg",
    likes: 2,
    comments: 0,
    views: 52,
    commentContent: "Bài viết ngắn gọn, súc tích. Mình hy vọng có thể áp dụng một vài mẹo trong buổi gọi vốn tới!"
  },
  {
    id: 5,
    title: "Hướng dẫn chiến lược tăng trưởng dành cho CEO",
    author: "Vũ Quốc Toàn",
    date: "21 Tháng 3, 2023",
    readTime: "2 phút đọc",
    image: "./image/thit.jpg",
    likes: 2,
    comments: 1,
    views: 67,
    commentContent: "Là một startup founder, mình rất quan tâm đến các chiến lược tăng trưởng. Cảm ơn tác giả đã chia sẻ!"
  },
];


const BlogPage = () => {
  return (
    <div className="blog-container">
      <Header />
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">WELCOME TO OUR BLOG</h1>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-overlay">
                <p className="blog-meta">{post.author} • {post.date} • {post.readTime}</p>
                <h2>{post.title}</h2>
                <div className="blog-stats">
                  <span>👁️ {post.views}</span>
                  <span>💬 {post.comments}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    <ContactForm />

    <Footer />
    </div>
  );
};

export default BlogPage;
