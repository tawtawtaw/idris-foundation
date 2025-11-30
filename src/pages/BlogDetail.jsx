import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/blogPosts.json";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-detail">
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <section className="detail-hero">
        <h1>{post.title}</h1>
        <p className="blog-date">{post.date}</p>
      </section>

      <img src={post.img} alt={post.title} className="detail-image" />

      <section className="detail-content">
        <p>{post.content}</p>
      </section>

      <Link to="/blog" className="back-link">← Back to Blog</Link>
    </div>
  );
};

export default BlogDetail;