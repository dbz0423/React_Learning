import {
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  CoverView,
  Image,
  Text,
  MovableArea,
  MovableView,
} from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

const Container = () => {
  // 准备Swiper展示的图片数据
  const swiperImages = [
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/2.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/3.jpg",
  ];

  // 准备ScrollView展示的列表数据
  const [listItems, setListItems] = useState(
    Array.from({ length: 10 }, (_, i) => `列表项 ${i + 1}`)
  );
  const [refresherTriggered, setRefresherTriggered] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // 下拉刷新处理
  const handleRefresh = () => {
    setRefresherTriggered(true);
    setTimeout(() => {
      setListItems(
        Array.from({ length: listItems.length }, (_, i) => `新列表项 ${i + 1}`)
      );
      setRefresherTriggered(false);
      setHasMore(true);
    }, 1000);
  };

  // 上拉加载更多
  const loadMoreData = () => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      // 模拟数据加载完成
      if (listItems.length >= 30) {
        setIsLoading(false);
        setHasMore(false);
      } else {
        const newItems = Array.from(
          { length: 10 },
          (_, i) => `列表项 ${listItems.length + i + 1}`
        );
        setListItems([...listItems, ...newItems]);
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <View className="container">
      {/* ScrollView组件示例：可滚动视图容器 */}
      <View className="section">
        <View className="section-title">ScrollView示例</View>
        <ScrollView
          className="scroll-view"
          scrollY // 允许垂直滚动
          scrollWithAnimation // 启动滚动动画
          refresherEnabled // 启用下拉刷新
          onRefresherRefresh={handleRefresh} // 下拉刷新处理
          refresherTriggered={refresherTriggered} // 绑定刷新状态
          onScrollToLower={loadMoreData} // 上拉加载处理
        >
          {listItems.map((item, index) => (
            <View key={index} className="scroll-item">
              {item}
            </View>
          ))}
          {/* 加载状态提示 */}
          <View className="loading-indicator">
            {isLoading && <View className="loading-spinner" />}
            {!isLoading && !hasMore && (
              <Text className="no-more-text">没有更多数据了～</Text>
            )}
          </View>
        </ScrollView>
      </View>

      {/* Swiper组件示例：轮播图容器 */}
      <View className="section">
        <View className="section-title">Swiper示例</View>
        <Swiper
          className="swiper"
          indicatorDots // 显示面板指示点
          autoplay // 自动播放
          interval={3000} // 自动播放间隔时间（毫秒）
          circular // 循环播放
        >
          {swiperImages.map((image, index) => (
            <SwiperItem key={index}>
              <Image className="swiper-image" src={image} mode="aspectFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* CoverView组件示例：可覆盖在原生组件上的文本视图 */}
      <View className="section">
        <View className="section-title">CoverView示例</View>
        <View className="cover-container">
          <Image
            className="background-image"
            src="https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg"
            mode="aspectFill"
          />
          <CoverView className="cover-view">
            <CoverView className="cover-text">这是一个CoverView示例</CoverView>
            <CoverView className="cover-description">
              CoverView可以覆盖在原生组件上
            </CoverView>
          </CoverView>
        </View>
      </View>

      {/* CoverView组件示例：可覆盖在原生组件上的文本视图 */}
      <View className="section">
        <View className="section-title">MovableView示例</View>
        <MovableArea style="height: 200px; width: 200px; background: black;">
          <MovableView
            style="height: 50px; width: 50px; background: white;"
            direction="all"
          ></MovableView>
        </MovableArea>
      </View>
    </View>
  );
};

export default Container;
