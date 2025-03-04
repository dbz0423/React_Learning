import { useState } from "react";
import { useUser } from "../context/UserLoginContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      login(username);
    } else {
      alert("用户名或密码错误");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={titleStyle}>登录</h2>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>用户名：</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="请输入用户名"
          style={inputStyle}
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>密码：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入密码"
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        登录
      </button>
    </form>
  );
};

// 样式定义
const formStyle = {
  maxWidth: "400px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  textAlign: "center",
  color: "#333",
  marginBottom: "20px",
  fontSize: "24px",
};

const inputGroupStyle = {
  marginBottom: "15px",
  width: "100%",
  display: "flex",
  alignItems: "center",
};

const labelStyle = {
  flex: "0 0 auto",
  marginRight: "10px",
  color: "#555",
  fontSize: "16px",
  width: "25%",
};

const inputStyle = {
  flex: "1",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  width: "75%",
};

const buttonStyle = {
  width: "auto",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};

export default LoginForm;
