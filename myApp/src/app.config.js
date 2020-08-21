/*
 * @Author: tim
 * @Date: 2020-08-18 09:32:53
 * @LastEditors: tim
 * @LastEditTime: 2020-08-21 17:28:01
 * @Description: 
 */

export default {
  pages: [
    'pages/home/index',
    'pages/index/index',
    'pages/search/index',
    'pages/book-detail/index',
    'pages/book-list/index',
    'pages/city/index',
    'pages/tabs/index',
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
        pagePath: "pages/city/index",
        text: "城市",
        iconPath: "./assets/tab_member.png",
        selectedIconPath: "./assets/tab_member.png"
      },
      {
        pagePath: "pages/tabs/index",
        text: "Tabs",
        iconPath: "./assets/tab_buy.png",
        selectedIconPath: "./assets/tab_buy.png"
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
