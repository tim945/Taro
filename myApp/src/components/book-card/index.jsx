import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Navigator, Image, Text } from "@tarojs/components";
import PropTypes from "prop-types";
import URL from "../../constants/urls";

import "./index.scss";

export default class BookCard extends Component {
  static options = {
    addGlobalClass: true
  };

  static defaultProps = {
    data: {},
    showArrow: true,
    onLongPress: () => {}
  };

  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.url
    }),
    showArrow: PropTypes.bool,
    onLongPress: PropTypes.func
  };

  onLongPress = () => {
    console.log('1111')
    this.props.onLongPress(this.props.data.id);
  }

  render() {
    const { data, showArrow } = this.props;
    return (
      // onLongPress 若直接加在 Navigator 属性,微信环境没效果
      <View onLongPress={this.onLongPress}>
      <Navigator
        className='at-row at-row__align--start my-book-card'
        hoverClass='None'
        url={`${URL.BOOK_DETAIL}?id=${data.id}`}        
      >
        <Image
          className='at-col at-col--auto my-book-card__img'
          style={{ marginRight: Taro.pxTransform(24, 750) }}
          src={data.image}
          mode='aspectFill'
        />
        <View className='at-col my-book-card__info'>
          <View className='my-book-card__info-title'>{data.title}</View>
          <View>
            评分：<Text class='color-warning'>{data.score}</Text>（
            {data.review_num}条评论）
          </View>
          <View>作者：{data.author}</View>
          <View>出版社：{data.publisher}</View>
          <View>出版日期：{data.pubdate}</View>
          <View>ISBN：{data.isbn}</View>
        </View>
        {showArrow && (
          <Text
            className='at-icon at-icon-chevron-right panel-header__arrow at-col at-col-1 at-col--auto'
            style={{ alignSelf: "center" }}
          />
        )}
      </Navigator>
      </View>
    );
  }
}
