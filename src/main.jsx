import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  {theme}  from '../theme'
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

 <BrowserRouter>
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
 </BrowserRouter>
  
)
