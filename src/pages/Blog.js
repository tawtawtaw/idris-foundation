import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import posts from "../data/blogPosts.json";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Our Blog & News</h1>
        <p>Stories of impact, updates, and inspiration.</p>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.img} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
