import { dishes } from "../types"

const initialState = {
  randomDish:[],
  favourites:[],
  loading:false,
  error:null
}

export const dishesReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case dishes.FETCH_DISHES:{
      return {
        ...state,
        randomDish:[],
        loading:true
      }
    }
    case dishes.FETCH_DISHES_SUCCESS:{
      return {
        ...state,
        loading:false,
        randomDish: {...payload}
      }
    }
    case dishes.FETCH_DISHES_ERROR:{
      return {
        ...state,
        loading:false,
        error:payload
      }
    }
    default:{
      return { ...state }
    }
  }
}