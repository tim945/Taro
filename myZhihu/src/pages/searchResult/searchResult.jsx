import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { Block, View } from '@tarojs/components';
import './searchResult.scss';

class SearchResult extends Component {
  // 构造器函数
  constructor() {
    super(...arguments);
    this.state = {
      searchKey: ''
    };
  }  

  componentDidMount() {
    const { key: searchKey } = Taro.getCurrentInstance().router.params
    this.setState({
      searchKey
    })
  }

  componentDidShow() {}

  componentDidHide() {}

  componentWillUnmount() {}

  onPullDownRefresh = () => {};
  onReachBottom = () => {};
  onShareAppMessage = () => {};

  render() {
    const { searchKey } = this.state;
    return (
      <Block>
        <View>搜索结果页</View>
        <View>{'搜索关键词:' + searchKey}</View>
      </Block>
    );
  }
}

export default SearchResult;
