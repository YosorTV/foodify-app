import { sideBar } from '../types';

const initialState = {
  isOpened: false
}

export const sideBarReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case sideBar.SET_SIDEBAR:
      return {
        isOpened:payload
      }
    default:
      return { ...state }
  }
}