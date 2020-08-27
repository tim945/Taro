import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIndexes, AtSearchBar, AtMessage } from 'taro-ui'

export default class City extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    console.log(Taro.showActionSheet, Taro.atMessage)
  }

  onChange (value) {
    this.setState({
      value
    })
  }
  onClear = () => {
    this.setState({
      value: ''
    })
  }
  onActionClick () {
    console.log('开始搜索', Taro.createSelectorQuery, this.scrollIntoView)
    this.scrollIntoView && this.scrollIntoView(this.state.value)
  }

  onClick (item) {
    console.log(item)
  }

  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        },
        {'name': '阿里'},
        {'name': '安康'},
        {'name': '安庆'},
        {'name': '鞍山'},
        {'name': '安顺'},
        {'name': '安阳'},
        {'name': '澳门'},
      ]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]
    return (
      <View style='height:100vh'>
        <AtMessage />
        <AtIndexes
          list={list}
          onScrollIntoView={fn => { this.scrollIntoView = fn }}
          onClick={this.onClick.bind(this)}
        >
          <View>
          <AtSearchBar
            actionName='搜一下'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
          </View>
        </AtIndexes>
      </View>
    )
  }
}