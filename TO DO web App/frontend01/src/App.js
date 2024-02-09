import React from 'react'
import Navbar from "./Components/navbar/Navbar01"
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            {/* eact path is the one that opens when the website is loaded --> landing or home page */}
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              
          </Routes>
      </Router>
     
      <Footer></Footer>
    </div>
  )
}

export default App;