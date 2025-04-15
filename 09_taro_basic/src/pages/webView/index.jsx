import React from "react";
import { View, WebView } from "@tarojs/components";
import "./index.scss";

const webView = () => {
  return (
    <View className="web_view">
      <WebView src="https://www.baidu.com/" />
    </View>
  );
};

export default webView;
