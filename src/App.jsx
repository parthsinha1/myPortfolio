import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import { motion } from "framer-motion";
import About from './pages/about'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import Resume from './pages/resume'
import HomePage from './pages/homepage'



function App() {


  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={<><HomePage /></>} />
        
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/projects" element={<><Projects /></>} />
        <Route path="/contacts" element={<><Contacts /></>} />
        <Route path="/resume" element={<><Resume /></>} />

      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
