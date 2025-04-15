import React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Component = () => {
  const handleNavigateClick = (page) => {
    Taro.navigateTo({
      url: `/pages/${page}/index`,
    });
  };

  return (
    <View className="component">
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("container")}
      >
        容器
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("basic")}
      >
        基础内容
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("form")}
      >
        表单组件
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("skyline")}
      >
        skyline
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("media")}
      >
        媒体组件
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("map")}
      >
        地图
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("location")}
      >
        定位
      </View>
      <View
        className="componentItem"
        onClick={() => handleNavigateClick("webView")}
      >
        webView
      </View>
    </View>
  );
};

export default Component;
