import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons8-home-48 (2).png";
import question from "../../assets/icons8-question-30 (1).png";
import tags from "../../assets/icons8-tags-50 (1).png";
import users from "../../assets/icons8-users-32.png";

const LeftSideBar = () => {
  return (
    <div className="Left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <img src={home} alt="" />
          <p>Home</p>
        </NavLink>
        <div className="sid-nav-div">
          <div>
            <p style={{color:'#76ABAE',fontWeight:600}}>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
          >
            <img
              src={question}
              alt=""
            
            />

            <p>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            style={{ paddingleft: "40px" }}
          >
            <img src={tags} alt="" />

            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            style={{ paddingleft: "40px" }}
          >
            <img src={users} alt=""/>

            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
