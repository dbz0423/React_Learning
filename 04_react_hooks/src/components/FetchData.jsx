import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 使用 useEffect
  useEffect(() => {
    // 执行 fetch 请求，从 API 获取数据，会在组件加载完成后执行一次
    fetch("https://api.xygeng.cn/one")
      .then((response) => {
        if (!response.ok) {
          throw new Error("网络请求错误");
        }
        // 将响应数据解析成 json 数据
        return response.json();
      })
      .then((json) => {
        if (json.code === 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "获取数据失败");
        }
      });
  }, []); // 空依赖数据，表示这个 effect 只在组件挂载时执行一次

  if (error) return <div>{error}</div>;
  if (!data) return <div>加载中</div>;

  // 数据加载成功，渲染数据
  return (
    <div>
      <p>来源：{data.origin}</p>
      <p>作者：{data.name}</p>
      <p>标签：{data.tag}</p>
      <p>内容：{data.content}</p>
    </div>
  );
};

export default FetchData;
