import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import History from './Components/MenuBarList/History';
import Video from './Components/Video/Video';
import MenuBar from './Components/MenuBar/MenuBar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [menuBar, setMenuBar] = useState(false);
  const [category, setCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <>
      <Router>
        <NavBar setMenuBar={setMenuBar} setSearchTerm={setSearchTerm} />
        <MenuBar menuBar={menuBar} category={category} setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<HomePage category={category} searchTerm={searchTerm} menuBar={menuBar}/>} />
          <Route path="/categories/:categoryId" element={<HomePage category={category} searchTerm={searchTerm} />} />
          <Route path="/videos/:videoId" element={<Video category={category} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App