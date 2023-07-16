import React from 'react'
import './LeftSideBar.css'
import {NavLink} from 'react-router-dom'
import home from '../../assets/home.png'
import question from '../../assets/question.png'
import tags from '../../assets/tags.png'
import users from '../../assets/users.png'

const LeftSideBar = () => {
  return (
    <div className='Left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
            <img src={home} alt="" style={{width:'25px',height:'25px'}}/>
                <p> Home</p>
            </NavLink>
            <div className="sid-nav-div">
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
                 <img src={question} alt="" style={{width:'25px',height:'25px'}}/>
                    
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' style={{paddingleft:"40px"}}>
                   <img src={tags} alt="" style={{width:'25px',height:'25px'}}/>

                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' style={{paddingleft:"40px"}}>
            <img src={users} alt="" style={{width:'25px',height:'25px'}}/>

                    <p>Users</p>
                </NavLink>
            </div>


        </nav>

    </div>
  )
}

export default LeftSideBar