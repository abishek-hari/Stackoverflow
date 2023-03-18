import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";

import icon from "../../assets/icon.png";
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

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='menu-bars'>
          <faIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className={sidebar ? "nav-menu show" : "nav-menu"}>
          <div className='nav-menu-div'>
            <Link to='#' className='close-bar'>
              <aiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            <div className='nav-items'>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <NavLink
                      to={item.path}
                      className='side-nav-link'
                      activeClassName='active'
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <Link to='/' className='nav-item nav-logo'>
          <img className='logo' src={logo} alt='logo' />
          <img className='icon' src={icon} alt='icon' />
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
            <div className='user-info'>
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
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
