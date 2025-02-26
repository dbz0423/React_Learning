import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSumbit = (newName, newEmail) => {
    // 更新组件的状态
    setName(newName);
    setEmail(newEmail);
  };

  return (
    <>
      <h1>用户注册</h1>
      <RegistForm onSubmit={handleFormSumbit} />
      <h1>提交数据</h1>
      <h2>Name：{name}</h2>
      <h2>Eamil：{email}</h2>
    </>
  );
};
export default RegistPage;
