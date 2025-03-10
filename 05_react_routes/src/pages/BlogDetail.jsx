import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";

const BlogDetail = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div className="blog-detail">
      <div className="blog-detail-cover">
        <img src={blog.cover} alt={blog.title} />
      </div>
      <div className="blog-detail-content">
        <h1 className="blog-detail-title">{blog.title}</h1>
        <div className="blog-detail-meta">
          <span>作者: {blog.author}</span>
          {/* 可以在这里添加更多元数据，比如创建时间、阅读量等 */}
        </div>
        <div className="blog-detail-body">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
