import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { connect } from 'react-redux'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
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

  onLongPress = () => {
    console.log('onLongPress')
    Taro.showActionSheet({
      itemList: ["不感兴趣"]
    })
      .then(() => {
        console.log("choose")
      })
      .catch(e => {
        console.log("取消点击", e);
      });
  }

  render () {
    return (
      <View>
        <Text>Hello world!</Text>
        <View className='at-row'>
          <View className='at-col'>
            <AtButton type='primary' circle={true} onClick={this.props.add}>+</AtButton>
          </View>
          <View className='at-col'>
            <AtButton type='primary' circle={true} onClick={this.props.minus}>-</AtButton>
          </View>
          <View className='at-col'>
            <AtButton type='secondary' circle={true} onClick={this.props.asyncAdd}>async add</AtButton>
          </View>
        </View>        
        <Text>{this.props.counter.num}</Text>

        <View onLongPress={this.onLongPress}>       
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src='https://storage.jd.com/taro-jd-com/static/cdc.png'          
        />
      </View>
      </View>
    )
  }
}
