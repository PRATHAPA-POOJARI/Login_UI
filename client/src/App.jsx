import { useState } from 'react'
import 'boostrap/dist/css/boostrap.min.css'
import Signup from './Signup';
import  {BrowserRouter,Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='Register'>

      </Route>
    </Routes>
    </BrowserRouter>
 
    
  )
}

export default App
