/*
 * @Author: tim
 * @Date: 2020-08-18 09:32:53
 * @LastEditors: tim
 * @LastEditTime: 2020-08-19 14:14:46
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

  componentDidShow () {}

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
