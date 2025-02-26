import "./style.css";

const Card2 = ({ headerSlot, centerSlot, footerSlot }) => {
  return (
    <div className="Card2">
      <div className="header">{headerSlot}</div>
      <div className="center2">{centerSlot}</div>
      <div className="footer">{footerSlot}</div>
    </div>
  );
};

export default Card2;
