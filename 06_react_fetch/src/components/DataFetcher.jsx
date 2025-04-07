import { useState, useEffect } from "react";

const DataFetcher = () => {
  // 状态管理：存储加载状态、文章数据和错误信息
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 处理副作用操作（数据获取）
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        if (!response.ok) throw new Error("请求失败");
        const data = await response.json();
        setPosts(data.slice(0, 5)); // 只取前5条数据用于演示
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  // 渲染不同状态的内容
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

export default DataFetcher;
