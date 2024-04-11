import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import { setCurrentUser } from "../../actions/currentUser";
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

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, User?.token]);


  return (
    <div className="main-nav">
      <Link to="/" className="nav-logo">
        AskC
      </Link>
      <div className="navbar">
        <div className="nav-quick-links">
          <Link to="/About" className="nav-item nav-btn">
            About
          </Link>
          <Link to="/Products" className="nav-item nav-btn">
            Products
          </Link>
          <Link to="/Teams" className="nav-item nav-btn">
            For Teams
          </Link>
        </div>

        {User === null ? (
          <>
            <Link to="/Auth" className="nav-item nav-links">
              Sign in
            </Link>
          </>
        ) : (
          <>
            <Avatar
              backgroundColor="#76abae"
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
