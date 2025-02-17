import React from "react";

const rainbowList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];

class RainbowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colorName: "black",
      random: -1,
    };
  }

  btnClick = () => {
    const { count, random } = this.state;
    const newRandom = (random + 1) % rainbowList.length;
    const newColorName = rainbowList[newRandom];

    this.setState({
      count: count + 1,
      random: newRandom,
      colorName: newColorName,
    });
  };

  render() {
    const { count, colorName } = this.state;
    return (
      <div>
        <h2 style={{ color: colorName }}>你已经点击了{count}次</h2>
        <button onClick={this.btnClick}>点我变成彩虹色</button>
        <h2>{count >= 10 ? "你触发了隐藏成就：彩虹大师！" : ""}</h2>
      </div>
    );
  }
}

export default RainbowList;
