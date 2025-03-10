import React from "react";
import blogs from "../data/blog";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BlogList = () => {
  const navigate = useNavigate();
  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId - 1}`);
  };

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="blog-item"
            onClick={() => handleBlogClick(blog.id)}
          >
            <div className="blog-cover">
              <img src={blog.cover} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 100)}...</p>
              <div className="blog-meta">
                <span>作者: {blog.author}</span>
                {/* 可以在这里添加更多元数据，比如创建时间、阅读量等 */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
