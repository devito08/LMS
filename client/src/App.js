import { BrowserRouter} from "react-router-dom"
import AllRouter from "./route";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div >
      <BrowserRouter>
          
          <AllRouter/>
      </BrowserRouter>
      <ToastContainer theme='ligsht'/>
    </div>
    
  )
}

export default App
