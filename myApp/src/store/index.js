/*
 * @Author: tim
 * @Date: 2020-08-18 09:59:02
 * @LastEditors: tim
 * @LastEditTime: 2020-08-18 13:43:55
 * @Description: 
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger))
  return store
}
