import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
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
      <Router basename="/You-tube-video-streaming-site">
        <NavBar setMenuBar={setMenuBar} setSearchTerm={setSearchTerm} />
        <MenuBar menuBar={menuBar} category={category} setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<HomePage category={category} searchTerm={searchTerm} menuBar={menuBar}/>} />
          <Route path="/categories/:categoryId" element={<HomePage category={category} searchTerm={searchTerm} menuBar={menuBar}/>} />
          <Route path="/videos/:videoId" element={<Video category={category} menuBar={menuBar}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App