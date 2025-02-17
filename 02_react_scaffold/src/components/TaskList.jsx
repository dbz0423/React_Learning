import React from "react";

const taskList = [
  {
    id: 1,
    name: "吃饭",
    completed: true,
  },
  {
    id: 2,
    name: "睡觉",
    completed: false,
  },
  {
    id: 3,
    name: "敲代码",
    completed: false,
  },
];

const count = taskList.filter((task) => !task.completed).length;

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <h2>任务列表</h2>
        <h3>当前未完成的任务数：{count}</h3>
        <div className="item">
          {taskList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <h2>序号：{item.id}</h2>
                <div>
                  {item.completed ? (
                    <h2 style={{ color: "green" }}>{item.name}</h2>
                  ) : (
                    <h2 style={{ color: "red" }}>{item.name}</h2>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
