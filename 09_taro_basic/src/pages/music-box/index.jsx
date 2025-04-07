import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtGrid, AtCard, AtButton } from "taro-ui";
import { useState, useEffect } from "react";
import "./index.scss";
import music from "../../assets/music/music.png";
import music2 from "../../assets/music/music2.png";
import music3 from "../../assets/music/music3.png";

export default function MusicBox() {
  const [audioContext, setAudioContext] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const ctx = Taro.createInnerAudioContext();
    ctx.src = "/public/music/shape.mp3";
    ctx.onPlay(() => setIsPlaying(true));
    ctx.onPause(() => setIsPlaying(false));
    ctx.onTimeUpdate(() => {
      setCurrentTime(ctx.currentTime);
      setDuration(ctx.duration);
    });
    ctx.onError((err) => {
      console.error("音频播放错误:", err);
      Taro.showToast({
        title: "播放失败，请检查音频文件",
        icon: "none",
      });
    });
    setAudioContext(ctx);
    return () => ctx.destroy();
  }, []);

  const handlePlayPause = () => {
    try {
      if (isPlaying) {
        audioContext.pause();
      } else {
        audioContext.play();
      }
    } catch (error) {
      console.error("播放控制错误:", error);
      Taro.showToast({
        title: "操作失败，请重试",
        icon: "none",
      });
    }
  };

  const musicCategories = [
    {
      image: music,
      value: "流行音乐",
    },
    {
      image: music2,
      value: "古典音乐",
    },
    {
      image: music3,
      value: "摇滚音乐",
    },
  ];

  const handleClick = (item) => {
    Taro.showToast({
      title: `点击了${item.value}`,
      icon: "none",
    });
  };

  return (
    <View className="music-box-container">
      <Text className="page-title">音乐分类</Text>
      <AtGrid data={musicCategories} onClick={handleClick} columnNum={3} />

      <AtCard title="今日推荐" extra="热门单曲">
        <Text>《晴天》- 周杰伦</Text>
      </AtCard>

      <View className="fixed-player">
        <View className="player-controls">
          <AtButton
            type="primary"
            onClick={handlePlayPause}
            className="play-button"
          >
            {isPlaying ? "暂停" : "播放"}
          </AtButton>

          <Text className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </Text>
        </View>
      </View>
    </View>
  );
}
