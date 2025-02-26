import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  return (
    <>
      <div>
        Name：
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="请输入..."
        ></input>
      </div>
      <h1></h1>
      <div>
        Email：
        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="请输入..."
        ></input>
      </div>
      <h1></h1>
      <button type="primary" onClick={() => onSubmit(newName, newEmail)}>
        提交
      </button>
    </>
  );
};

export default RegistForm;
