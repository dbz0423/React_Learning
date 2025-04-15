import React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Api = () => {
  const handleNavigateClick = (page) => {
    Taro.navigateTo({
      url: `/pages/${page}/index`,
    });
  };

  return (
    <View className="api">
      <View className="apiItem" onClick={() => handleNavigateClick("contact")}>
        联系人
      </View>
      <View className="apiItem" onClick={() => handleNavigateClick("device")}>
        设备
      </View>
      <View className="apiItem" onClick={() => handleNavigateClick("screen")}>
        截屏
      </View>{" "}
      <View
        className="apiItem"
        onClick={() => handleNavigateClick("blue-teeth")}
      >
        蓝牙
      </View>
      <View className="apiItem" onClick={() => handleNavigateClick("cut")}>
        剪贴板
      </View>
      <View className="apiItem" onClick={() => handleNavigateClick("internet")}>
        网络
      </View>
      <View
        className="apiItem"
        onClick={() => handleNavigateClick("send-code")}
      >
        扫码
      </View>
    </View>
  );
};

export default Api;
