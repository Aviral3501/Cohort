import React from 'react'
import Navbar from "./Components/navbar/Navbar01"
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Signup from './Components/signup/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signin from './Components/signup/Signin';
import Todo from './Components/todo/Todo';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            {/* eact path is the one that opens when the website is loaded --> landing or home page */}
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/signin" element={<Signin/>}></Route>
              <Route path="/todo" element={<Todo/>}></Route>
              
          </Routes>
      </Router>
     
      <Footer></Footer>  
    </div>
  )
}

export default App;