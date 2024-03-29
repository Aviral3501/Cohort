import React, { useEffect } from 'react'
import Navbar from "./Components/navbar/Navbar01"
import Home from './Components/home/Home';
// import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Signup from './Components/signup/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signin from './Components/signup/Signin';
import Todo from './Components/todo/Todo';
import { authActions } from "./store";
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  //if i already am signed in then use session storage to automatically log in on refresh
  useEffect(() => {
    const id=sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  }, [])
  
  return (
    <>
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
     
       
    </div>
    <div>
    {/* <Footer></Footer>  */}
    </div>
    </>
  )
}

export default App; 