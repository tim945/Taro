/*
 * @Author: tim
 * @Date: 2020-08-18 09:59:02
 * @LastEditors: tim
 * @LastEditTime: 2020-08-18 14:46:41
 * @Description: 
 */
import { ADD, MINUS } from "./action-type";

export const add = () => {
  return {
    type: ADD
  };
};
export const minus = () => {
  return {
    type: MINUS
  };
};

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 3000);
  };
}
