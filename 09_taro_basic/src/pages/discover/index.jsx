import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default function Discover() {
  const handleCardClick = (page) => {
    Taro.navigateTo({
      url: `/pages/${page}/index`,
    });
  };

  const Card = ({ title, description, background, onClick }) => (
    <View className="discover-card" style={{ background }} onClick={onClick}>
      <Text className="card-title">{title}</Text>
      <Text className="card-description">{description}</Text>
    </View>
  );

  return (
    <View className="discover-container">
      <Card
        title="发现名片"
        description="生成个人名片"
        background="linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
        onClick={() => handleCardClick("business-card")}
      />
      <Card
        title="记账本"
        description="记录日常收支"
        background="#f0f9ff"
        onClick={() => handleCardClick("account-book")}
      />
      <Card
        title="音乐盒子"
        description="畅听精选歌单"
        background="#f5f0ff"
        onClick={() => handleCardClick("music-box")}
      />
    </View>
  );
}
