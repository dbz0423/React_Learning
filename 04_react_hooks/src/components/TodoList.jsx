import React, { useState } from "react";

function TodoList() {
  // 状态：待办事项列表和输入内容
  const [todos, setTodos] = useState([]); // 待办事项列表
  const [inputText, setInputText] = useState(""); // 输入框内容

  // 添加新待办事项
  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      // 生成唯一的ID（简单实现）
      const id = Date.now().toString();
      const newTodo = { id, text: inputText, completed: false };

      // 更新待办事项列表
      setTodos([...todos, newTodo]);
      setInputText(""); // 清空输入框
    }
  };

  // 标记待办事项为已完成
  const handleToggleComplete = (id) => {
    // 更新状态：使用map遍历，找到对应ID的事项并切换其completed状态
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={containerStyle}>
      {/* 输入框 */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="添加新待办事项..."
        style={inputStyle}
      />

      {/* 添加按钮 */}
      <button onClick={handleAddTodo} style={buttonStyle}>
        添加
      </button>

      {/* 待办事项列表 */}
      <ul style={listStyle}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleComplete(todo.id)}
            style={{
              ...listItemStyle,
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 样式定义
const containerStyle = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
};

const inputStyle = {
  width: "70%",
  padding: "10px",
  marginRight: "10px",
  fontSize: "16px",
  border: "2px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  margin: "5px",
};

const listStyle = {
  marginTop: "20px",
  padding: 0,
};

const listItemStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  cursor: "pointer",
  hover: {
    backgroundColor: "#f0f0f0",
  },
};

export default TodoList;
