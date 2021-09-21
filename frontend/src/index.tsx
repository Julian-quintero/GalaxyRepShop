import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./utils/theme";
import {Provider} from 'react-redux'
import store from './store';

import "@fontsource/inter";
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: "Inter",
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
    <App />
   </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
