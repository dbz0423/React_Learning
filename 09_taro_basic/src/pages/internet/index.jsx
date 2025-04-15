import React, { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Internet = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  // GET请求示例
  const handleGetRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await Taro.request({
        url: "http://v.juhe.cn/toutiao/index?key=ab3b520b1b486d5afe16504a341be080",
        method: "GET",
      });
      setResponseData(res.data);
      Taro.showToast({
        title: "GET请求成功",
        icon: "success",
      });
    } catch (err) {
      console.error("GET请求失败:", err);
      setError(err.errMsg || "请求失败");
      Taro.showToast({
        title: "GET请求失败",
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  // POST请求示例
  const handlePostRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await Taro.request({
        url: "http://v.juhe.cn/toutiao/index?type=guoneipage=1&key=ab3b520b1b486d5afe16504a341be080",
        method: "POST",
        header: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setResponseData(res.data);
      Taro.showToast({
        title: "POST请求成功",
        icon: "success",
      });
    } catch (err) {
      console.error("POST请求失败:", err);
      setError(err.errMsg || "请求失败");
      Taro.showToast({
        title: "POST请求失败",
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="internet">
      <View className="button-group">
        <Button
          className="request-btn"
          onClick={handleGetRequest}
          loading={loading}
          disabled={loading}
        >
          发送GET请求
        </Button>
        <Button
          className="request-btn"
          onClick={handlePostRequest}
          loading={loading}
          disabled={loading}
        >
          发送POST请求
        </Button>
      </View>

      {responseData && (
        <View className="response-area">
          <Text className="response-title">响应数据:</Text>
          <Text className="response-data">
            {JSON.stringify(responseData, null, 2)}
          </Text>
        </View>
      )}

      {error && (
        <View className="error-area">
          <Text className="error-text">错误: {error}</Text>
        </View>
      )}
    </View>
  );
};

export default Internet;
