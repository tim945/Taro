/*
 * @Author: tim
 * @Date: 2020-08-19 10:51:43
 * @LastEditors: tim
 * @LastEditTime: 2020-08-24 13:56:56
 * @Description: 路由表
 */

var db = require("./db.js");

// 添加自定义路由
let routes = {
  "/books?isbn=:isbn": "/books/1" // 参数中有isbn时，重定向到id为1的图书
};

// 修改 db.js 中 "root-sub" 形式的路由为 "/root/sub"
Object.keys(db).map(key => {
  let newKey = "/" + key.replace("-", "/");
  key = "/" + key;
  routes[newKey] = key; // '/a-b' => '/a/b'
  routes[newKey + "/:id"] = key + "/:id"; // '/a-b/:id' => '/a/b/:id', 即 db.js中的键值与请求API地址map
});

module.exports = routes;
