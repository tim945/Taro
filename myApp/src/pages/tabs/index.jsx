import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui'

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
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
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