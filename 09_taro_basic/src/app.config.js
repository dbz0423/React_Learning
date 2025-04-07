export default defineAppConfig({
  pages: [
    "pages/main/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/index/index",
    "pages/product/index",
    "pages/login/index",
    "pages/business-card/index",
    "pages/account-book/index",
    "pages/music-box/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#4594D5",
    navigationBarTitleText: "我的应用",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/main/index",
        text: "主页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
    ],
  },
});
