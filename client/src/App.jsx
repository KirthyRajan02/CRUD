import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Users /> }> </Route> 
        {/* this route is used to users component */}

        <Route path='/create' element={ <CreateUser /> }> </Route>
        {/* this route is used to create user component */}

        <Route path='/update/:id' element={ <UpdateUser /> }> </Route> 
        {/* this route is used to update user component */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


