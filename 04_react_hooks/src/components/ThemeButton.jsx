import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const [theme, setTheme] = useState(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "white" : "black",
      }}
    >
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        切换到 {theme === "light" ? "暗黑" : "明亮"}模式
      </button>
    </div>
  );
};

export default ThemeButton;
