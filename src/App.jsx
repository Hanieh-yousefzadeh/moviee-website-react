import { Routes, Route ,Navigate } from 'react-router'
import { useState } from 'react'
import Home from "./pages/home"
import Shows from "./pages/shows"
import Genre from "./pages/genre"
import Search from "./pages/search"
import ShowDetails from "./pages/showdetails"
import Login from './pages/login'
import { AuthContext } from './context/authcontext'






function App() {

  const [user, setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("user")) || null
  })
  
  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={ user? <Home /> : <Navigate to="/login" />} />
          <Route path="/shows" element={ user ? <Shows />: <Navigate to="/login" />} />
          <Route path="/genre/:genre" element={ user? <Genre /> : <Navigate to="/login" />} />
          <Route path="/search" element={ user ?<Search /> : <Navigate to="/login" />} />
          <Route path="/show/:id" element={ user ? <ShowDetails /> :  <Navigate to="/login" />} />

        </Routes>
      </AuthContext>
    </>
  )
}


export default App;