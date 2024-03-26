
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index.js'

import { Toaster } from 'react-hot-toast';
const store=configureStore({
  reducer:rootReducer,
})

// import store from './store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>,
  </Provider>
)





// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// // import getDefaultMiddleware from '@reduxjs/toolkit'
// import rootReducer from './reducers/index.js'
// // import thunkMiddleware from 'redux-thunk'; // Import Redux Thunk middleware

// import { Toaster } from 'react-hot-toast';

// const store = configureStore({
//   reducer: rootReducer,
//   // middleware: [ thunkMiddleware] // Add Redux Thunk middleware
// })

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//       <Toaster />
//     </BrowserRouter>
//   </Provider>
// )
