import React, { useState, useEffect } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const BlueTeeth = () => {
  const [devices, setDevices] = useState([]);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [currentDevice, setCurrentDevice] = useState(null);

  // 初始化蓝牙模块
  const initBluetooth = () => {
    Taro.showLoading({ title: "初始化中..." });

    // 检查蓝牙权限
    Taro.authorize({
      scope: "scope.bluetooth",
      success: () => {
        // 检查蓝牙适配器状态
        Taro.openBluetoothAdapter({
          success: () => {
            Taro.hideLoading();
            Taro.showToast({ title: "蓝牙初始化成功", icon: "success" });
            startBluetoothDiscovery();
          },
          fail: (err) => {
            Taro.hideLoading();
            console.error("蓝牙初始化失败:", err);
            Taro.showToast({ title: "蓝牙初始化失败", icon: "none" });
          },
        });
      },
      fail: () => {
        Taro.hideLoading();
        Taro.showModal({
          title: "提示",
          content: "需要蓝牙权限才能使用此功能",
          success: function (res) {
            if (res.confirm) {
              Taro.openSetting();
            }
          },
        });
      },
    });
  };

  // 开始搜索蓝牙设备
  const startBluetoothDiscovery = () => {
    Taro.showLoading({ title: "搜索中..." });

    // 监听发现新设备事件
    Taro.onBluetoothDeviceFound((res) => {
      const newDevices = res.devices.filter(
        (device) =>
          device.name && !devices.some((d) => d.deviceId === device.deviceId)
      );
      if (newDevices.length > 0) {
        setDevices((prev) => [...prev, ...newDevices]);
      }
    });

    // 开始搜索
    Taro.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      success: () => {
        Taro.hideLoading();
        Taro.showToast({ title: "开始搜索设备", icon: "none" });

        // 10秒后停止搜索
        setTimeout(() => {
          Taro.stopBluetoothDevicesDiscovery();
          Taro.showToast({ title: "搜索结束", icon: "none" });
        }, 10000);
      },
      fail: (err) => {
        Taro.hideLoading();
        console.error("搜索失败:", err);
        Taro.showToast({ title: "搜索失败", icon: "none" });
      },
    });
  };

  // 连接蓝牙设备
  const connectDevice = (device) => {
    setConnecting(true);

    Taro.createBLEConnection({
      deviceId: device.deviceId,
      success: () => {
        setConnecting(false);
        setConnected(true);
        setCurrentDevice(device);
        Taro.showToast({ title: "连接成功", icon: "success" });
      },
      fail: (err) => {
        setConnecting(false);
        console.error("连接失败:", err);
        Taro.showToast({ title: "连接失败", icon: "none" });
      },
    });
  };

  // 断开蓝牙连接
  const disconnectDevice = () => {
    if (!currentDevice) return;

    Taro.closeBLEConnection({
      deviceId: currentDevice.deviceId,
      success: () => {
        setConnected(false);
        setCurrentDevice(null);
        Taro.showToast({ title: "已断开连接", icon: "success" });
      },
      fail: (err) => {
        console.error("断开连接失败:", err);
        Taro.showToast({ title: "断开连接失败", icon: "none" });
      },
    });
  };

  return (
    <View className="blue-teeth">
      <Button className="init-btn" onClick={initBluetooth} disabled={connected}>
        初始化蓝牙
      </Button>

      <Button
        className="search-btn"
        onClick={startBluetoothDiscovery}
        disabled={!devices.length && connected}
      >
        搜索设备
      </Button>

      {devices.length > 0 && (
        <View className="device-list">
          <Text className="title">发现设备:</Text>
          {devices.map((device) => (
            <View key={device.deviceId} className="device-item">
              <Text>{device.name || "未知设备"}</Text>
              <Button
                size="mini"
                onClick={() => connectDevice(device)}
                loading={connecting}
                disabled={connected}
              >
                {connecting ? "连接中..." : "连接"}
              </Button>
            </View>
          ))}
        </View>
      )}

      {connected && currentDevice && (
        <View className="connected-device">
          <Text className="title">已连接设备:</Text>
          <Text>{currentDevice.name || "未知设备"}</Text>
          <Button className="disconnect-btn" onClick={disconnectDevice}>
            断开连接
          </Button>
        </View>
      )}
    </View>
  );
};

export default BlueTeeth;
