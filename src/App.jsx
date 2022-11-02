import { BrowserRouter } from "react-router-dom";
import Principal from "./Layout/Principal";
import {AppRouter} from './router'

function App() {
 

  return (
    <>
      <Principal /> 
     
          <AppRouter />

    </>
  )
}

export default App
