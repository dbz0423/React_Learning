import React, { useState } from "react";
import { createPost } from "../api/post";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, body });
      setTitle("");
      setBody("");
      window.location.href = "/";
    } catch (err) {
      setError("提交失败: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>标题</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>内容</h1>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">提交</button>
    </form>
  );
};

export default CreatePost;
