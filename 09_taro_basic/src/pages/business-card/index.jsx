import { View, Text, Input, Button } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
import NameCard from "../../components/NameCard";

const BusinessCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
  });

  const [cardInfo, setCardInfo] = useState(null);

  const handleInput = (field, e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.detail.value,
    }));
  };

  const handleSubmit = () => {
    // 这里可以添加提交逻辑
    console.log("提交数据:", formData);
    setCardInfo(formData);
  };

  const handleDelete = () => {
    setFormData({
      name: "",
      position: "",
      company: "",
      phone: "",
      email: "",
    });
    setCardInfo(null);
  };

  return (
    <View className="business-card">
      <View className="form-section">
        <Text className="form-title">填写名片信息</Text>

        <View className="input-group">
          <Text>姓名:</Text>
          <Input
            value={formData.name}
            onInput={(e) => handleInput("name", e)}
            placeholder="请输入姓名"
          />
        </View>

        <View className="input-group">
          <Text>职位:</Text>
          <Input
            value={formData.position}
            onInput={(e) => handleInput("position", e)}
            placeholder="请输入职位"
          />
        </View>

        <View className="input-group">
          <Text>公司:</Text>
          <Input
            value={formData.company}
            onInput={(e) => handleInput("company", e)}
            placeholder="请输入公司名称"
          />
        </View>

        <View className="input-group">
          <Text>电话:</Text>
          <Input
            value={formData.phone}
            onInput={(e) => handleInput("phone", e)}
            placeholder="请输入联系电话"
            type="number"
          />
        </View>

        <View className="input-group">
          <Text>邮箱:</Text>
          <Input
            value={formData.email}
            onInput={(e) => handleInput("email", e)}
            placeholder="请输入电子邮箱"
            type="email"
          />
        </View>

        <Button type="primary" onClick={handleSubmit} className="submit-btn">
          生成名片
        </Button>
      </View>

      <Button type="warn" onClick={handleDelete} className="submit-btn">
        清空
      </Button>
      {cardInfo && <NameCard cardInfo={cardInfo} />}
    </View>
  );
};

export default BusinessCard;
