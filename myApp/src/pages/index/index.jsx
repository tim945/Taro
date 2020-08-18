import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
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
      </View>
    )
  }
}
