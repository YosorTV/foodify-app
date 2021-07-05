import { dishes } from "../types"

const initialState = {
  randomDish:[],
  favourites:localStorage.getItem('favDishes') 
    ? JSON.parse(localStorage.getItem('favDishes')) 
    : [],
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
    case dishes.SET_DISH_TO_FAVOURITE:{
      return {
        ...state,
        favourites:[payload, ...state.favourites]
      }
    }
    case dishes.REMOVE_DISH:{
      const dishes = JSON.parse(localStorage.getItem('favDishes'));
      const item = dishes.filter((item) => item.idMeal !== payload.idMeal)
        localStorage.setItem('favDishes', JSON.stringify(item))
      return {
        ...state,
        favourites:state.favourites.filter((item) => item.idMeal !== payload.idMeal)
      }
    }
    default:{
      return { ...state }
    }
  }
}