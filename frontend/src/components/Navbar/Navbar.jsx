import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import { setCurrentUser } from "../../actions/currentUser";
// import logo from '../../assets/logo.png'
import search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  // const checkForExpiredUser=()=>{
  //   const user = JSON.parse(localStorage.getItem('profile'))
  //   let token
  //   if(user){
  //     token=user.token
  //   }
  //   else{
  //     handleLogout()
  //   }
  //   if(token){
  //     const decodeToken = decode(token)
  //     const HOUR_IN_SECONDS = 60*60

  //     dispatch(setCurrentUser(user))
  //     if(decodeToken.exp*3*HOUR_IN_SECONDS < new Date().getTime()){
  //       handleLogout()
  //     }
  //   }
  // }
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    // checkForExpiredUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, User?.token]);

  const handleSearch = (e) => {
    // alert(e)
  };

  return (
    <div className="main-nav">
      <Link to="/" className="nav-logo">
        AskC
      </Link>
      <div className="navbar">
        <form>
          <input type="text" placeholder="Search..." className="nav-item" onChange={(e)=>handleSearch(e.target.value)} style={{color:"black",textDecoration:'none'}}/>
        </form>

        <Link to="/About" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/Products" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/Teams" className="nav-item nav-btn">
          For Teams
        </Link>

        {User === null ? (
          <>
            <Link to="/Auth" className="nav-item nav-links">
              Sign in
            </Link>
          </>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="12px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User?.result?.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <Link to="/" className="nav-item nav-links" onClick={handleLogout}>
              Sign Out
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
