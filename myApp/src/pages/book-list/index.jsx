import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View } from "@tarojs/components";
import { AtMessage, AtNoticebar, AtActivityIndicator } from "taro-ui";
import { disfavorBookById } from "../../store/home/action";
import BookCard from "../../components/book-card";

import "./index.scss";

const mapTitle = {
  'new': '新书速递',
  'hot': '近期热门',
  'recommend': '为你推荐',
}

@connect(
  ({ home }) => ({
    newBooks: home.newBooks,
    hotBooks: home.hotBooks,
    recommendBooks: home.recommendBooks
  }),
  {
    dispatchDisfavorBook: disfavorBookById
  }
)
export default class BookList extends Component {

  constructor() {
    super(...arguments);
    this.state = { isShowNoticebar: true, isFetching: true };
    this.onLongPress = this.onLongPress.bind(this);
  }

  componentDidMount() {
    const { type } = Taro.getCurrentInstance().router.params    
    Taro.setNavigationBarTitle({title:mapTitle[type]});
    this.setState({
      isFetching: false
    })
  }

  onLongPress (id) {
    console.log('onLongPress')
    Taro.showActionSheet({
      itemList: ["不感兴趣"]
    })
      .then(() => {
        const { type } = Taro.getCurrentInstance().router.params
        this.props.dispatchDisfavorBook(id, type);
        Taro.atMessage({ message: "我们会减少此图书的出现频率" });
      })
      .catch(e => {
        console.log("取消点击", e);
      });
  }

  onCloseNoticebar = () => {
    this.setState({ isShowNoticebar: false });
  }

  render() {
    let data;
    const { isFetching } = this.state;
    const { type } = Taro.getCurrentInstance().router.params
    
    switch (type) {
      case "new":
        data = this.props.newBooks;
        break;
      case "hot":
        data = this.props.hotBooks;
        break;
      case "recommend":
        data = this.props.recommendBooks;
        break;
    }
    return (
      <View>
        <AtMessage />
        {this.state.isShowNoticebar && (
          <AtNoticebar close onClose={this.onCloseNoticebar}>
            长按标记不感兴趣的图书
          </AtNoticebar>
        )}
        {data.map(item => (
          <BookCard data={item} key={item.id} onLongPress={this.onLongPress} />
        ))}

        {isFetching && (
          <AtActivityIndicator mode='center' content='加载中...' />
        )}
      </View>
    );
  }
}
