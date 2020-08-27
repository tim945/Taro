import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui'

import './index.scss'

export default class City extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  // onScrollToUpper() {}

  // or 使用箭头函数
  onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }

  getScrollViewHeight = () => {
    Taro.getSystemInfo().then(res => {
      let winHeight = res.windowHeight
      let tabHeader = uni.createSelectorQuery().select(".my-tabs>.at-tabs__header"); //想要获取高度的元素名（class/id）

      tabHeader.boundingClientRect(data=>{
          // this.scrollHeight=winHeight-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
      }).exec()
    })
  }

  render () {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]

    const scrollStyle = {
      height: '100%'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26, 173, 25)'
    }
    const vStyleB = {
       height: '150px',
      'background-color': 'rgb(39,130,215)'
    }
    const vStyleC = {
      height: '150px',
      'background-color': 'rgb(241,241,241)',
      color: '#333'
    }

    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} className='my-tabs'>
        <AtTabsPane current={this.state.current} index={0} >
          {/* <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View> */}
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpper}
            onScroll={this.onScroll}
          >
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
          </ScrollView>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}