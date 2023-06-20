import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    
    <div className='home-container-1'>
      <LeftSideBar/>
      <div className='home-container-2'>
        <QuestionDetails/>
        
      </div>
    </div>
    
  )
}

export default DisplayQuestion