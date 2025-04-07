import React from "react";
import { View, Text } from "@tarojs/components";
import "../components/index.scss";

const NameCard = ({ cardInfo }) => {
  return (
    <View className="preview-section">
      <Text className="preview-title">名片预览</Text>
      <View className="card-preview">
        <Text className="name">{cardInfo.name}</Text>
        <Text className="position">{cardInfo.position}</Text>
        <Text className="company">{cardInfo.company}</Text>
        <View className="contact-info">
          <Text>电话: {cardInfo.phone}</Text>
          <Text>邮箱: {cardInfo.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default NameCard;
