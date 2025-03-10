import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import users from "../data/user";
import { useForm } from "react-hook-form";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // 查找匹配的用户
    const user = users.find(
      (u) => u.username === data.username && u.password === data.password
    );
    console.log(user);

    if (user) {
      // 保存用户信息到本地存储
      localStorage.setItem("user", JSON.stringify(user));
      // 跳转到home
      navigate("/home");
    } else {
      alert("错误的用户名或者密码");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>登录页面</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">账号：</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="error">{errors.username.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">密码：</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
