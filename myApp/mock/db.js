/*
 * @Author: tim
 * @Date: 2020-08-19 10:51:43
 * @LastEditors: tim
 * @LastEditTime: 2020-08-24 15:22:06
 * @Description: mock 数据源
 */

var Mock = require("mockjs");
var BookFactory = require("./factory/book");

var newBooks = BookFactory.randomMulti();
var hotBooks = BookFactory.randomMulti();
var recommendBooks = BookFactory.randomMulti();
var allBooks = Mock.Random.shuffle([
  ...newBooks,
  ...hotBooks,
  ...recommendBooks
]); // 默认数组 6*3 -> 18条数据

// 并入第2层的关联数组到第一层数据
var relatedBooks = allBooks.reduce((relatedBooks, book) => {
  return relatedBooks.concat(book.related_books)
}, [])

allBooks = [].concat(allBooks, relatedBooks)

/**
 * json-server不支持嵌套访问，如'books/new'
 * 需要在routes.js中设置rewriter
 *
 * 服务启动后db中的数据将不会改变
 */
module.exports = {
  books: allBooks,
  "books-new": newBooks,
  "books-hot": hotBooks,
  "books-recommend": recommendBooks
};
