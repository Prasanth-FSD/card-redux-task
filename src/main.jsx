import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Provider } from 'react-redux'
import ConfigureStore from './features/ConfigureStore.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //provide the store values to app component
  <Provider store={ConfigureStore}>
    <App />
  </Provider>
  // </React.StrictMode>,
); 