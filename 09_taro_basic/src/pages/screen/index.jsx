import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

export default function Screen() {
  const handleCapture = async () => {
    try {
      // 1. 获取屏幕截图
      const res = await Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: Taro.getSystemInfoSync().windowWidth,
        height: Taro.getSystemInfoSync().windowHeight,
        destWidth: Taro.getSystemInfoSync().windowWidth,
        destHeight: Taro.getSystemInfoSync().windowHeight,
        canvasId: "myCanvas",
      });

      // 2. 保存到相册
      await Taro.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
      });

      Taro.showToast({
        title: "截图保存成功",
        icon: "success",
      });
    } catch (err) {
      Taro.showToast({
        title: "截图失败",
        icon: "none",
      });
      console.error(err);
    }
  };

  return (
    <View className="screen">
      <canvas style={{ width: "100%", height: "100vh" }} canvas-id="myCanvas" />
      <Button onClick={handleCapture}>截图</Button>
    </View>
  );
}
