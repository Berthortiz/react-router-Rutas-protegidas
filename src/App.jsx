
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css'
import { Admin, Analytics, Dashboard, Home, Landing } from './pages/Landing'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'

function Navigation() {
  return (
    <nav>

      <ul>
        <li><Link to='/home' >Home</Link> </li>
        <li><Link to='/dashboard' >Dashboard</Link> </li>
        <li><Link to='analytics' >Analytics</Link> </li>
        <li><Link to='admin' >Admin</Link> </li>
      </ul>
    </nav>
  )
}


function App() {

  // simulación de back-end
  const [user, setUser] = useState(null)

  console.log(user);
  const login = () => {

    setUser({
      id: 1,
      name: 'john'
    })

    console.log(user);

  }

  const logout = () => {

    setUser(null)

  }



  return (
    <BrowserRouter>
      <Navigation></Navigation>

      {
        user ? (<button onClick={logout}> Logout</button>)
          : <button onClick={login}> Login </button>
      }




      <Routes>

        <Route path='/' index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={
          <ProtectedRoute user={user}>

            <Home />

          </ProtectedRoute>
        } />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </BrowserRouter>


  )
}





export default App
