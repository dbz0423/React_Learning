import { useState } from "react";

const TextInput = () => {
  const [InputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder={InputValue} />
      <div>当前输入的内容是：{InputValue}</div>
    </div>
  );
};

export default TextInput;
