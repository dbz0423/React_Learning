import { useState, useEffect } from "react";
import { getPosts } from "../api/post";

const AxiosDataFetcher = () => {
  // 状态管理：存储加载状态、文章数据和错误信息
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 处理副作用操作（数据获取）
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 使用 axios 发送 GET 请求
        const response = await getPosts({ params: { _limit: 5 } });
        setPosts(response); // 取前5条数据
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
    <div className="data-container">
      {isLoading ? (
        <div>数据加载中...</div>
      ) : error ? (
        <div>错误：{error}</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AxiosDataFetcher;
