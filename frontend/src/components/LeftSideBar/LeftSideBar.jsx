import React from 'react'
import './LeftSideBar.css'
import {NavLink} from 'react-router-dom'
// import logo2 from '../../assets/logo2.png'

const LeftSideBar = () => {
  return (
    <div className='Left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className="sid-nav-div">
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
                    <img src="" alt="logo2" width='18px'/> 
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' style={{paddingleft:"40px"}}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' style={{paddingleft:"40px"}}>
                    <p>Users</p>
                </NavLink>
            </div>


        </nav>

    </div>
  )
}

export default LeftSideBar