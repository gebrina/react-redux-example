import { DECREMENT, INCREMENT } from "./constant"

export type Action = {
  type:string,
  payload:number
}

export const incrementAction = (amount:number):Action=>({type:INCREMENT,payload:amount});
export const decrementAction = (amount:number):Action=>({type:DECREMENT,payload:amount})