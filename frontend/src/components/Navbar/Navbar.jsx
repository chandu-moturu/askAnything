import React ,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import decode from 'jwt-decode'


import { setCurrentUser } from '../../actions/currentUser'
// import logo from '../../assets/logo.png'
// import search from '../../assets/search-solid.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'


const Navbar = () => {
  const dispatch=useDispatch()
  var User = useSelector((state)=>(state.currentUserReducer))
  const navigate=useNavigate()

  const handleLogout=()=>
  {
    dispatch({type:'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))

  }

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
  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodeToken=decode(token)
      if(decodeToken.exp*1000<new Date().getTime())
      {
        handleLogout()
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    // checkForExpiredUser()
  },[dispatch,User?.token])



  return (
    <nav className='main-nav'>
      <Link to ='/' className="nav-logo">
        {/* <img className='img' src={logo} alt="logo" width='12'/> */}
        AskC
      </Link>
      <div className="navbar">
      
      <Link to='/About' className="nav-item nav-btn">About</Link>
      <Link to='/Products' className="nav-item nav-btn">Products</Link>
      <Link to='/Teams' className="nav-item nav-btn">For Teams</Link>
      {/* <form>
        <input type="text" placeholder='Search...' className='nav-item' />
        <img src={search} alt="search" width='18' className='search-icon'/>
      </form> */}
      {User===null?
          <>
            <Link to ='/Auth' className="nav-item nav-links" >Sign in</Link> 
        
          </>
         :
          <>
           <Avatar backgroundColor='#009dff' px='12px' py='7px' borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:"white" , textDecoration:"none" }} >{User?.result?.name.charAt(0).toUpperCase()}</Link></Avatar>
           <Link to='/' className='nav-item nav-links' onClick={handleLogout}>Sign Out</Link>
         </>
      }
      </div>
    </nav>
    
  )
}

export default Navbar