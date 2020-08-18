import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getNewBooks, getHotBooks, getRecommendBooks } from "@store/home/action"
import URL from "../../constants/urls"
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

export default class Home extends Component {

  constructor() {
    super(...arguments);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClickSearchBar = () => {
    Taro.navigateTo({ url: URL.SEARCH })
  }

  render () {
    return (
      <View>
        <FakeSearchBar onClick={this.onClickSearchBar} />
      </View>
    )
  }
}
