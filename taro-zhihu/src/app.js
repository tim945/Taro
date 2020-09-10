/*
 * @Author: tim
 * @Date: 2020-08-25 15:34:56
 * @LastEditors: tim
 * @LastEditTime: 2020-08-26 18:16:14
 * @Description: 
 */
import React, { Component } from 'react'
import { View, Text, Image, Picker } from '@tarojs/components'
import { Provider } from 'react-redux'
// import 'taro-ui/dist/style/index.scss';
import Index from '@/pages/index/index';
// import './app.scss';

class App extends Component {
  // 在组件挂载之后立即调用
  componentDidMount() {
    console.log('aaa')
  }

  // 在 App 类中的 render() 函数没有实际作用 
  // 请勿修改此函数
  render() {    
    // return null
    // return <Text>日期选择器</Text>
    return <Index />;
    // return (
    //   <Provider>
    //     {this.props.children}
    //   </Provider>    
    // )
  }
}

export default App
