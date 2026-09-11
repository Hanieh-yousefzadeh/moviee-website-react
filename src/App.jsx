import { Routes, Route } from 'react-router'
import Home from "./pages/home"
import Shows from "./pages/shows"
import Genre from "./pages/genre"
import Search from "./pages/search"
import ShowDetails from "./pages/showdetails"







function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/genre/:genre" element={<Genre />} />
      <Route path="/search" element={<Search />} />
      <Route path="/show/:id" element={<ShowDetails />} />
    </Routes>
  )
}


export default App;