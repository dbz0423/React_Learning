import { useState } from "react";
import { Menu } from "antd";
import { MailOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";

const Header = () => {
  const items = [
    {
      key: "Index",
      label: "首页",
      icon: <HomeOutlined />,
    },
    {
      key: "Mail",
      label: "邮件",
      icon: <MailOutlined />,
    },
    {
      key: "Setting",
      label: "设置",
      icon: <SettingOutlined />,
    },
  ];
  const [current, setCurrent] = useState("Index");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
