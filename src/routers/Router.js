import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../theme/Index'
import Marketplace from '../theme/Marketplace'
import Blog from '../theme/Blog'


function App() {
    return (
        <div>
         <Router>
          <Routes>
              <Route path="/" element={<Index/>} />           
              <Route path="/marketplace" element={<Marketplace />} />   
              <Route path="/blog" element={<Blog />} />   
          </Routes>
        </Router>
        </div>
    );
}

export default App;