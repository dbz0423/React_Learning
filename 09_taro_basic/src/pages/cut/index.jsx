import React, { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Cut = () => {
  const [clipboardText, setClipboardText] = useState("");
  const [inputText, setInputText] = useState("");

  // 复制文本到剪贴板
  const handleCopy = () => {
    if (!inputText) {
      Taro.showToast({
        title: "请输入要复制的文本",
        icon: "none",
      });
      return;
    }

    Taro.setClipboardData({
      data: inputText,
      success: () => {
        Taro.showToast({
          title: "复制成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("复制失败:", err);
        Taro.showToast({
          title: "复制失败",
          icon: "none",
        });
      },
    });
  };

  // 从剪贴板获取文本
  const handlePaste = () => {
    Taro.getClipboardData({
      success: (res) => {
        setClipboardText(res.data);
        Taro.showToast({
          title: "获取成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("获取剪贴板内容失败:", err);
        Taro.showToast({
          title: "获取失败",
          icon: "none",
        });
      },
    });
  };

  const handleInputChange = (e) => {
    setInputText(e.detail.value);
  };

  return (
    <View className="cut">
      <View className="input-area">
        <Text>输入要复制的文本:</Text>
        <input
          type="text"
          value={inputText}
          onInput={handleInputChange}
          placeholder="请输入文本"
        />
        <Button className="copy-btn" onClick={handleCopy}>
          复制到剪贴板
        </Button>
      </View>

      <View className="output-area">
        <Button className="paste-btn" onClick={handlePaste}>
          从剪贴板获取
        </Button>
        {clipboardText && (
          <View className="clipboard-text">
            <Text>剪贴板内容: {clipboardText}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Cut;
