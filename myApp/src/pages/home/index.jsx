import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getNewBooks, getHotBooks, getRecommendBooks } from "@store/home/action"
import URL from "../../constants/urls"
import Panel from "../../components/panel";
import HorizonList from "../../components/horizon-list";
import FakeSearchBar from "../../components/fake-search-bar";

import './index.scss'

const mapStateToProps = ({ home }) => ({
  newBooks: home.newBooks,
  hotBooks: home.hotBooks,
  recommendBooks: home.recommendBooks
})

const mapDispatchToProps  = {
  dispatchGetNewBooks: getNewBooks,
  dispatchGetHotBooks: getHotBooks,
  dispatchGetRecommendBooks: getRecommendBooks
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {

  constructor() {
    super(...arguments);
  }

  componentWillMount () { 
    console.log('home.componentWillMount')
  }

  componentDidMount () { 
    console.log('home.componentDidMount')
    this.props.dispatchGetNewBooks();
    this.props.dispatchGetHotBooks();
    this.props.dispatchGetRecommendBooks();
  }

  componentWillUnmount () { 
    console.log('home.componentWillUnmount')
  }

  componentDidShow () { 
    console.log('home.componentDidShow')
  }

  componentDidHide () { 
    console.log('home.componentDidHide')
  }

  // 跳转到搜索
  onClickSearchBar = () => {
    Taro.navigateTo({ url: URL.SEARCH })
  }

  render () {
    return (
      <View>
        <FakeSearchBar onClick={this.onClickSearchBar} />
        <Panel
          url={`${URL.BOOK_LIST}?type=new`}
          title='新书速递'
          className='panel--first'
        >
          <HorizonList data={this.props.newBooks} />
        </Panel>
        <Panel
          url={`${URL.BOOK_LIST}?type=hot`}
          title='近期热门'
          className='margin-top-lg'
        >
          <HorizonList data={this.props.hotBooks} />
        </Panel>
        <Panel
          url={`${URL.BOOK_LIST}?type=recommend`}
          title='为你推荐'
          className='margin-top-lg'
        >
          <HorizonList data={this.props.recommendBooks} />
        </Panel>
      </View>
    )
  }
}
