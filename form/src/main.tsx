import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.querySelector('#root')
)
