import React from 'react'
import "./Navbar.css"
import { GiWhiteBook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authActions } from "../../store";
import { useDispatch } from 'react-redux';


const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch();
  const logout = ()=>{
    //clear the sotrage
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }


  // console.log(isLoggedIn);


  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b><GiWhiteBook /> &nbsp;TODO</b></Link>
          {/* The &nbsp; is used to insert a space between the GiWhiteBook icon and the text "TODO". */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
              </li>
              {!isLoggedIn &&
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signup">SignUp</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signin">SignIn</Link>
                  </li>
                </>
              }
              {isLoggedIn &&
                <>
                  <li className="nav-item mx-2 " onClick={logout}>
                    <Link className="nav-link active btn-nav" aria-current="page" to="/" >LogOut</Link>
                  </li>
                </>
              }


            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;
