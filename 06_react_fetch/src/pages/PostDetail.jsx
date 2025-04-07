import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../api/post";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);
  const navigate = useNavigate();

  return (
    <div className="glass-container">
      <button
        className="glass-btn"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px" }}
      >
        返回
      </button>
      {isLoading ? (
        <div>加载中...</div>
      ) : error ? (
        <div>错误：{error}</div>
      ) : post ? (
        <div className="glass-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>未找到该帖子</div>
      )}
    </div>
  );
};

export default PostDetail;
