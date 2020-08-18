/*
 * @Author: tim
 * @Date: 2020-08-18 09:32:53
 * @LastEditors: tim
 * @LastEditTime: 2020-08-18 17:15:48
 * @Description: 
 */
export default {
  pages: [
    'pages/home/index',
    'pages/index/index',
    'pages/search/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/tab_home.png",
        selectedIconPath: "./assets/tab_home_f.png"
      },
      {
        pagePath: "pages/index/index",
        text: "测试",
        iconPath: "./assets/tab_me.png",
        selectedIconPath: "./assets/tab_me_f.png"
      }
    ],
    color: "#a6a6a6",
    selectedColor: "#78a4fa",
    backgroundColor: "#ffffff",
    borderStyle: "black"
  }
}
