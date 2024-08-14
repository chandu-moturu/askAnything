import React from 'react'
import {Link} from 'react-router-dom'
import './Users.css'

const User = ({user}) => {
  // console.log(user)
  return (
    
    <Link to={`/Users/${user._id}`} className="user-profile-link">
      <img
        src={user.pic}
        alt="User profile"
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
      />
      <h5>{user.name}</h5>
    </Link>
  );
}

export default User