import { Carousel } from "antd";

const MainBanner = () => {
  const contentStyle = {
    height: "100px",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };
  const imageStyle = {
    width: "100%",
    height: "300px",
  };
  return (
    <>
      <Carousel arrows infinite={false}>
        <div style={contentStyle}>
          <img src="../public/40.jpg" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <img src="../public/40.jpg" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <img src="../public/40.jpg" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <img src="../public/40.jpg" style={imageStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default MainBanner;
