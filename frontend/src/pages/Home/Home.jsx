import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import '../../App.css'
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar/>
      
      <HomeMainBar />

      
    </div>
  )
}
export default Home