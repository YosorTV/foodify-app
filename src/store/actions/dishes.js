import { dishes } from "../types"
import { api } from '../../api';

export const dishesActions = Object.freeze({
  getRandomDish:() => async (dispatch) => {
    try{
      dispatch({ type: dishes.FETCH_DISHES });
      const { data } = await api.get();
      dispatch({ type:dishes.FETCH_DISHES_SUCCESS, payload:data })
    } catch ({ response }) {
        if(response.status === 404){ 
          dispatch({
            type:dishes.FETCH_DISHES_ERROR, 
            payload: response.statusText || "Oops something go wrong..." 
          })
        }
    }
  },
})