import React from "react";
import "../App.css"; // 引入 CSS 文件

class RoleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
      tili: 9,
      zhili: 10,
    };
  }

  btnClick = () => {
    const { count, tili, zhili } = this.state;

    if (count == 90) {
      this.setState({
        count: 0,
        tili: tili + 2,
        zhili: zhili + 5,
      });
    } else {
      this.setState({
        count: count + 10,
      });
    }
  };

  render() {
    const { count, tili, zhili } = this.state;
    const isLevelUp = count === 100;

    return (
      <div className="role-container">
        <h2
          className="experience-bar"
          style={{ width: count == 0 ? "400px" : `${count}%` }}
        >
          人物经验：{count}/100
        </h2>
        <button className="experience-button" onClick={this.btnClick}>
          增加人物经验10
        </button>
        {isLevelUp && (
          <div className="level-up-message">
            <h2 className="congrats-message">恭喜你升了一级！</h2>
            <h2 className="stats-message">
              体力+2变为 <span className="highlight">{tili + 2}</span>
            </h2>
            <h2 className="stats-message">
              智力+5变为 <span className="highlight">{zhili + 5}</span>
            </h2>
          </div>
        )}
        {!isLevelUp && (
          <div className="current-stats">
            <h2>体力：{tili}</h2>
            <h2>智力：{zhili}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default RoleList;
