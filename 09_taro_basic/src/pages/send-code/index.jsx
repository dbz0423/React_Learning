import React, { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const SendCode = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScanCode = () => {
    Taro.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log("扫码结果:", res.result);
        setScanResult(res.result);
        Taro.showToast({
          title: "扫码成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("扫码失败:", err);
        Taro.showToast({
          title: "扫码失败",
          icon: "none",
        });
      },
    });
  };

  return (
    <View className="send-code">
      <Button className="scan-btn" onClick={handleScanCode}>
        扫码
      </Button>
      {scanResult && (
        <View className="result-area">
          <Text className="result-title">扫码结果:</Text>
          <Text className="result-content">{scanResult}</Text>
        </View>
      )}
    </View>
  );
};

export default SendCode;
