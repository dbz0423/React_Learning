import { useState } from "react";

const ThemeToggle = () => {
  // 使用 useState 这个 Hook 来储存当前的主题状态
  // isDarkMode 为 true 标识暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum
        aspernatur ad nesciunt. Praesentium optio alias quo accusamus nihil
        veniam eum molestias ab mollitia, cumque blanditiis delectus recusandae
        vitae voluptates!{" "}
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天模式" : "黑夜模式"}
      </button>
    </div>
  );
};

export default ThemeToggle;
