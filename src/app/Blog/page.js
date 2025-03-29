"use client";

import React from "react";
import "../styles/Blog.css";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "5 qualities of successful project managers",
    author: "Admin",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    image: "./image/thit.jpg",
    likes: 20,
    comments: 0,
    views: 0,
  },
  {
    id: 2,
    title: "10 essentials for the traveling businessman",
    author: "Admin",
    date: "Mar 21, 2023",
    readTime: "2 min read",
    image: "./image/thit.jpg",
    likes: 22,
    comments: 0,
    views: 0,
  },
  {
    id: 3,
    title: "Profile: Tech Investor Paul Dooby",
    author: "Admin",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    image: "./image/thit.jpg",
    likes: 6,
    comments: 0,
    views: 0,
  },
  {
    id: 4,
    title: "Business tip: how to attract investors",
    author: "Admin",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    image: "./image/thit.jpg",
    likes: 2,
    comments: 0,
    views: 0,
  },
  {
    id: 5,
    title: "A CEO’s Guide to Strategic Growth",
    author: "Admin",
    date: "Mar 21, 2023",
    readTime: "2 min read",
    image: "./image/thit.jpg",
    likes: 2,
    comments: 0,
    views: 0,
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
