import Card from "./card/Card";
import "../components/card/style.css";

const MainProductList = () => {
  const tips = ["标题一", "标题二", "标题三"];
  return (
    <div className="card-list">
      {tips.map((item, index) => (
        <div style={{ padding: "20px" }} key={index}>
          <Card
            image="../40.jpg"
            avatar="../39.png"
            title={item}
            description={item + item}
          />
        </div>
      ))}
    </div>
  );
};

export default MainProductList;
