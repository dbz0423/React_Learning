import { useEffect, useState } from "react";

const Time = () => {
  // 当前时间
  const [time, setTime] = useState(new Date());

  // 格式化时间
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // 更新时间函数
  const updateTime = () => {
    setTime(new Date());
  };

  // 使用 useEffect 设置定时器
  useEffect(() => {
    // 每秒更新时间（定时器）1000毫秒=1秒
    const interval = setInterval(updateTime, 1000);

    // 清除定时器（组件卸载前）
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>当前时间：{formatTime(time)}</p>
    </div>
  );
};

export default Time;
