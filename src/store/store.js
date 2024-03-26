// // import { configureStore } from '@reduxjs/toolkit';
// // import getDefaultMiddleware from '@reduxjs/toolkit';
// // import thunkMiddleware from 'redux-thunk';
// // import rootReducer from '../reducers/index'; // Your root reducer path

// // const store = configureStore({
// //   reducer: rootReducer,
// //   middleware: [...getDefaultMiddleware(), thunkMiddleware]
// // });
// // // 
// // export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from '@reduxjs/toolkit'
// import thunkMiddleware from 'redux-thunk'
// // import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from '../reducers/index';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// // The store now has the ability to accept thunk functions in `dispatch`
// const store = configureStore(rootReducer, composedEnhancer)
// export default store