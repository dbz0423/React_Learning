import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../api/post";

const PostList = () => {
  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (err) {
      setError("删除失败: " + err.message);
    }
  };
  // 状态管理：存储加载状态、文章数据和错误信息
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 处理副作用操作（数据获取）
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 使用 axios 发送 GET 请求
        // 取前5条数据
        const response = await getPosts({ params: { _limit: 5 } });
        setPosts(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // 渲染逻辑与 DataFetcher 保持一致
  return (
    <div className="glass-container">
      <div className="responsive-grid">
        {posts.map((post) => (
          <div className="glass-card" key={post.id}>
            <Link to={`/posts/${post.id}`} className="glass-link">
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <div className="button-group">
              <button
                className="glass-btn"
                onClick={() => handleDelete(post.id)}
              >
                删除
              </button>
              <Link to={`/posts/${post.id}/edit`} className="glass-btn">
                编辑
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
