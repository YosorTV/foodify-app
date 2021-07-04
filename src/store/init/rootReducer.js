// Core
import { combineReducers } from 'redux';

// Reducers 
import { 
  sideBarReducer as sideBar,
  dishesReducer as dishes
} from '../reducers';

export const rootReducer = combineReducers({ sideBar, dishes });