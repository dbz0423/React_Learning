import "./style.css"; // 引入样式文件

const Card = ({ image, avatar, title, description }) => {
  return (
    <div className="card">
      {/* 图片部分 */}
      <div className="card-image">
        <img src={image} alt="card-image" />
      </div>
      {/* 内容部分 */}
      <div className="card-content">
        <div className="card-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
