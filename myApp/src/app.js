/*
 * @Author: tim
 * @Date: 2020-08-18 09:32:53
 * @LastEditors: tim
 * @LastEditTime: 2020-08-26 10:18:58
 * @Description: 
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from "./store"

import 'taro-ui/dist/style/index.scss'
import './app.scss'

const store = configStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {
    /* 这里有你想要的路由信息 */
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    // return this.props.children
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
