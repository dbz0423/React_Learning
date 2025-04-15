# Taro 组件与 API 使用文档

### View

- **用途**：基础容器组件
- **示例**：`<View className="container"></View>`
- **路径**：`@tarojs/components`
- **参数说明**：
  - hoverClass：点击态样式类
  - hoverStartTime：按住后出现点击态时长（毫秒）
  - hoverStayTime：手指松开后点击态保留时长（毫秒）

### Text

- **用途**：文本展示组件
- **示例**：`<Text selectable>可选中文字</Text>`
- **特性**：
  - 支持文本选择（selectable 属性）
  - 支持多行省略（numberOfLines 属性）

### ScrollView

- **用途**：可滚动视图容器
- **示例**：

```jsx
<ScrollView scrollY style={{ height: "300px" }} onScrollToLower={loadMore}>
  {items}
</ScrollView>
```

- **核心参数**：
  - scrollY：允许纵向滚动
  - scrollX：允许横向滚动
  - refresherEnabled：启用下拉刷新
  - onRefresherRefresh：下拉刷新事件

### Image

- **用途**：图片展示组件
- **示例**：`<Image src={require('@/assets/logo.png')} mode="aspectFit" />`
- **模式说明**：
  - scaleToFill：不保持纵横比缩放
  - aspectFit：保持纵横比居中缩放
  - aspectFill：保持纵横比填充容器

### Video

- **用途**：视频播放组件
- **示例**：`<Video src={videoUrl} controls />`
- **路径**：`@tarojs/components`
- **参数说明**：
  - autoplay：自动播放
  - poster：视频封面

### Audio

- **用途**：音频播放组件
- **示例**：`<Audio src={audioUrl} />`
- **路径**：`@tarojs/components`
- **参数说明**：
  - loop：循环播放
  - controls：显示控件

### Input

- **用途**：输入框组件（原生）
- **示例**：`<Input placeholder="请输入" />`
- **路径**：`@tarojs/components`
- **特性**：
  - 支持各种输入类型（text/number/idcard）

### Textarea

- **用途**：多行文本输入
- **示例**：`<Textarea placeholder="多行输入" />`
- **路径**：`@tarojs/components`
- **参数说明**：
  - maxlength：最大长度
  - autoHeight：高度自适应

### Picker

- **用途**：滚动选择器组件
- **示例**：`<Picker mode="selector" range={options} onChange={handlePickerChange}>请选择</Picker>`
- **模式说明**：
  - selector：普通选择器
  - multiSelector：多列选择器
  - time：时间选择器
  - date：日期选择器

### Switch

- **用途**：开关选择器
- **示例**：`<Switch checked={isChecked} onChange={handleSwitch} />`
- **参数说明**：
  - color：开关颜色
  - disabled：禁用状态

## Taro API

### 动画 API

- **Taro.createAnimation**
  - **用途**：创建动画实例
  - **示例**：

```javascript
const animation = Taro.createAnimation({
  duration: 1000,
  timingFunction: "ease",
});

animation.rotate(45).step();
this.setState({ animation: animation.export() });
```

### 登录态接口

- **Taro.checkSession**
  - **用途**：检查登录态是否过期
  - **示例**：

```javascript
Taro.checkSession({
  success: () => console.log("session未过期"),
  fail: () => Taro.login(),
});
```

### 媒体接口

- **Taro.chooseImage**
  - **用途**：从相册选择图片
  - **示例**：

```javascript
Taro.chooseImage({
  count: 9,
  success: (res) => console.log("选择的图片:", res.tempFilePaths),
});
```

### 开放接口

#### Taro.getUserProfile

- **用途**：获取用户信息
- **示例**：

```javascript
Taro.getUserProfile({
  desc: "用于完善会员资料",
  success: (res) => {
    console.log(res.userInfo);
  },
});
```

#### Taro.getClipboardData

- **用途**：获取剪贴板内容
- **示例**：

```javascript
Taro.getClipboardData({
  success: (res) => {
    console.log("剪贴板内容:", res.data);
  },
});
```

### 设备 API

#### Taro.getNetworkType

- **用途**：获取网络类型
- **返回类型**：wifi/2g/3g/4g/5g/unknown/无网络

#### Taro.makePhoneCall

- **用途**：拨打电话
- **示例**：`Taro.makePhoneCall({ phoneNumber: '10086' })`

### Taro.getStorageSync

- **用途**：同步获取本地缓存
- **示例**：`const records = Taro.getStorageSync('accountRecords')`
- **关联 API**：
  - Taro.setStorageSync：同步存储数据
  - Taro.removeStorageSync：同步删除数据

### Taro.switchTab

- **用途**：跳转到 tabBar 页面
- **示例**：`Taro.switchTab({ url: '/pages/main/index' })`
- **注意**：
  - 只能跳转 app.config 中定义的 tabBar 页面

### Taro.reLaunch

- **用途**：关闭所有页面并打开新页面
- **示例**：`Taro.reLaunch({ url: '/pages/login/index' })`

### Taro.navigateBack

- **用途**：返回上一页面
- **示例**：`Taro.navigateBack({ delta: 1 })`
- **参数说明**：
  - delta：返回层级数

### Taro.getSystemInfo

- **用途**：获取系统信息
- **示例**：`const system = Taro.getSystemInfoSync()`
- **返回信息**：
  - brand：设备品牌
  - model：设备型号
  - screenWidth：屏幕宽度

### Taro.createSelectorQuery

- **用途**：创建节点查询对象
- **示例**：`const query = Taro.createSelectorQuery().select('#element')`

### Taro.navigateTo

- **用途**：页面跳转
- **参数说明**：
  - url：目标页面路径（需在 app.config 注册）
  - events：页面间通信事件
  - success：接口调用成功的回调
- **注意**：
  - 最多保留 10 个页面实例
  - 跳转到 tabBar 页面需使用 switchTab

### Taro.request

- **用途**：发起网络请求
- **示例**：

```javascript
Taro.request({
  url: "https://api.example.com/data",
  method: "POST",
  data: { page: 1 },
  header: { "Content-Type": "application/json" },
});
```

- **核心配置**：
  - timeout：超时时间（默认 60000ms）
  - dataType：返回数据解析类型
  - enableHttp2：启用 HTTP2

### Taro.uploadFile

- **用途**：文件上传
- **示例**：

```javascript
const uploadTask = Taro.uploadFile({
  url: "https://upload.example.com",
  filePath: tempFilePath,
  name: "file",
  formData: { user: "test" },
  success: console.log,
});
```

- **特性**：
  - 返回 UploadTask 对象可监听进度
  - 支持 abort()中断上传

### Taro.createCameraContext

- **用途**：创建相机上下文
- **示例**：

```javascript
const cameraCtx = Taro.createCameraContext();
// 拍照
cameraCtx.takePhoto({
  quality: "high",
  success: (res) => console.log(res.tempImagePath),
});
```

### Taro.getLocation

- **用途**：获取地理位置
- **示例**：

```javascript
Taro.getLocation({
  type: "wgs84",
  success: (res) => {
    console.log(res.latitude, res.longitude);
  },
});
```

### Taro.scanCode

- **用途**：调起扫码功能
- **示例**：

```javascript
Taro.scanCode({
  onlyFromCamera: true,
  success: (res) => {
    console.log("扫码结果:", res.result);
  },
});
```

## 高级组件

### RecycleView

- **用途**：长列表性能优化组件
- **示例**：

```jsx
<RecycleView
  className="list"
  height={500}
  itemData={items}
  itemSize={100}
  onScroll={handleScroll}
/>
```

- **核心参数**：
  - itemData：列表数据
  - itemSize：预估行高
  - useIsScrolling：是否启用滚动状态监听

### CheckboxGroup

- **用途**：多项选择容器
- **示例**：

```jsx
<CheckboxGroup onChange={handleCheckChange}>
  <Checkbox value="1">选项1</Checkbox>
  <Checkbox value="2">选项2</Checkbox>
</CheckboxGroup>
```

### RadioGroup

- **用途**：单项选择容器
- **示例**：

```jsx
<RadioGroup onChange={handleRadioChange}>
  <Radio value="A">选项A</Radio>
  <Radio value="B">选项B</Radio>
</RadioGroup>
```

### LivePlayer

- **用途**：实时音视频播放（微信小程序专用）
- **示例**：

```jsx
<LivePlayer src="rtmp://example.com/live/stream" mode="RTC" autoplay />
```

### LivePusher

- **用途**：实时音视频录制（微信小程序专用）
- **示例**：

```jsx
<LivePusher url="rtmp://example.com/live/stream" mode="RTC" beautyLevel={3} />
```

## 地图组件

### Map

- **用途**：地图展示组件
- **示例**：

```jsx
<Map
  longitude={116.397428}
  latitude={39.90923}
  markers={markers}
  show-location
  style="width: 100%; height: 300px;"
/>
```

- **核心参数**：
  - longitude：中心经度
  - latitude：中心纬度
  - markers：标记点数组
  - polyline：路线数组
  - include-points：显示在可视区域内的坐标点列表

## 导航栏配置

- **app.config.js 配置示例**：

```javascript
export default {
  window: {
    navigationBarTitleText: "我的应用",
    navigationBarBackgroundColor: "#1890ff",
    navigationBarTextStyle: "white",
  },
};
```

- **配置说明**：
  - navigationBarTitleText：导航栏标题
  - navigationBarBackgroundColor：导航栏背景色
  - navigationBarTextStyle：标题颜色（仅支持 black/white）

## Taro-UI 组件库

### AtForm

- **用途**：表单容器组件
- **示例**：`<AtForm className="login-form">...</AtForm>`
- **路径**：`taro-ui`

### AtSegmentedControl

- **用途**：分段控制器
- **示例**：`<AtSegmentedControl values={['收入', '支出']} />`
- **参数说明**：
  - current：当前选中项索引
  - values：选项数组

### AtSearchBar

- **用途**：搜索栏组件
- **示例**：`<AtSearchBar value={keyword} onChange={handleSearch} />`
- **特性**：
  - 自带搜索图标
  - 支持清除按钮

### AtDivider

- **用途**：分隔线组件
- **示例**：`<AtDivider content="商品推荐" />`
- **参数说明**：
  - fontColor：文字颜色
  - lineColor：分割线颜色

### AtAvatar

- **用途**：头像组件
- **示例**：`<AtAvatar circle image={avatarUrl} size="large" />`
- **参数说明**：
  - circle：圆形头像
  - size：尺寸（small/normal/large）

### AtGrid

- **用途**：宫格布局
- **示例**：`<AtGrid data={gridData} columnNum={3} />`
- **路径**：`taro-ui`
- **参数说明**：
  - mode：布局模式（square/rect）
  - hasBorder：显示边框
  - icon：自定义图标 URL

### AtCard

- **用途**：卡片容器
- **示例**：`<AtCard title="今日推荐">...</AtCard>`
- **扩展功能**：
  - extra：右上角额外内容
  - note：底部备注信息
  - thumb：标题前图标

### AtButton

- **用途**：按钮组件
- **类型**：支持 primary/secondary
- **示例**：`<AtButton type="primary">提交</AtButton>`
- **扩展参数**：
  - size：按钮尺寸（normal/small）
  - circle：圆形按钮
  - loading：加载状态

### AtInput

- **用途**：输入框组件
- **示例**：

```jsx
<AtInput
  name="phone"
  title="手机号"
  type="phone"
  placeholder="请输入手机号"
  value={this.state.phone}
  onChange={this.handleChange}
/>
```

- **核心功能**：
  - 支持文本/数字/密码类型
  - 自带清除按钮
  - 错误状态提示

### AtMessage

- **用途**：全局消息提示
- **使用方式**：

1. 在入口文件引入：`import { AtMessage } from 'taro-ui'`
2. 添加组件：`<AtMessage />`
3. 调用显示：`Taro.atMessage({ message: '提示', type: 'success' })`

- **消息类型**：
  - info：信息（默认）
  - success：成功
  - error：错误
  - warning：警告

> 完整 API 文档请参考[Taro 官方文档](https://taro-docs.jd.com/docs/)
