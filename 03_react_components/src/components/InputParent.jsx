import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("123");

  const handleInputChange = (newValue) => {
    // 更新组件的状态
    setInputValue(newValue);
  };

  return (
    <>
      <h2>输入的值是：{inputValue}</h2>
      <Input onInputChange={handleInputChange}></Input>
    </>
  );
};
export default InputParent;
