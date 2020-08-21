import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { connect } from 'react-redux'
import { View, Text, Image, Picker } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import { add, minus, asyncAdd } from "../../store/counter/action" // diapatch action

import './index.scss'

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps  = (dispatch) => ({
  add() {
    dispatch(add())
  },
  minus() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  },
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends Component {
  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '中国',
    timeSel: '01:02',
    dateSel: '2020-08-22'
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () { 
    console.log('componentDidMount')
  }

  componentWillUnmount () { 
    console.log('componentWillUnmount')
  }

  componentDidShow () { 
    console.log('componentDidShow')
  }

  componentDidHide () { 
    console.log('componentDidHide')
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  

  render () {
    return (
      <View>
        <Text>Hello world!</Text>
        <View className='at-row'>
          <View className='at-col'>
            <AtButton type='primary' size='small' circle={true} onClick={this.props.add}>+</AtButton>
          </View>
          <View className='at-col'>
            <AtButton type='primary' size='small' circle={true} onClick={this.props.minus}>-</AtButton>
          </View>
          <View className='at-col'>
            <AtButton type='secondary' size='small' circle={true} onClick={this.props.asyncAdd}>async add</AtButton>
          </View>
        </View>        
        <Text>{this.props.counter.num}</Text>

        <View onLongPress={this.onLongPress}>       
          <Image
            style='width: 300px;height: 100px;background: #fff;'
            src='https://storage.jd.com/taro-jd-com/static/cdc.png'          
          />
        </View>

        <View className='container'>
          <View className='page-body'>
            <View className='page-section'>
              <Text>地区选择器</Text>
              <View>
                <Picker mode='selector' range={this.state.selector} value='1' onChange={this.onChange}>
                  <AtList>
                    <AtListItem
                      title='国家地区'
                      extraText={this.state.selectorChecked}
                    />
                  </AtList>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text>时间选择器</Text>
              <View>
                <Picker mode='time' value={this.state.timeSel} onChange={this.onTimeChange}>
                  <AtList>
                    <AtListItem title='请选择时间' extraText={this.state.timeSel} />
                  </AtList>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text>日期选择器</Text>
              <View>
                <Picker mode='date' onChange={this.onDateChange}>
                  <AtList>
                    <AtListItem title='请选择日期' extraText={this.state.dateSel} />
                  </AtList>
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
