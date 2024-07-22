import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice'
import profileReducer from '../slice/profileSlice';
import cartReducer from '../slice/cartSlice';
import loadingBarReducer from '../slice/loadingBarSlice';
import courseReducer from "../slice/courseSlice";
import viewCourseReducer from "../slice/viewCourseSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  profile:profileReducer,
  cart: cartReducer,
  loadingBar: loadingBarReducer,
  course:courseReducer,
  viewCourse:viewCourseReducer,
});

export default rootReducer;
