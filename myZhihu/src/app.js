/*
 * @Author: tim
 * @Date: 2020-08-26 16:37:09
 * @LastEditors: tim
 * @LastEditTime: 2020-08-27 10:06:35
 * @Description: 
 */
import { Component } from 'react'
import 'taro-ui/dist/style/index.scss';
import './app.scss';

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
