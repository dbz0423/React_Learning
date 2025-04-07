import { View, Text, Button, Image } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";
import { AtButton } from "taro-ui";

export default function Index() {
  const message = "hello react";
  const imageUrl = "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const fruits = [
    {
      id: 1,
      name: "苹果",
      price: 5,
    },
    {
      id: 2,
      name: "香蕉",
      price: 4,
    },
    {
      id: 3,
      name: "橙子",
      price: 4,
    },
  ];

  return (
    <View className="index">
      <Text>{message}</Text>
      <View>
        <Text>{isLoggedIn ? "您已登录" : "您未登录"}</Text>
        <Button
          type="primary"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "退出登录" : "登录"}
        </Button>
      </View>
      {fruits.map((item) => (
        <View key={item.id}>
          <Text>{item.name}——</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      <Image src={imageUrl} />
      <AtButton type="primary">Click Me</AtButton>
    </View>
  );
}
