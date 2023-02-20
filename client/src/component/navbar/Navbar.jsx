import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import "./Navbar.css";
import Avatar from "../../component/Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          For Teams
        </Link>
        <form>
          <input type='text' placeholder='search...' />
          <img className='search' src={search} alt='search' />
        </form>
        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor='#009dff'
              px='7px'
              py='10px'
              color='#fff'
              fontSize='1rem'
              borderRadius='50%'
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
