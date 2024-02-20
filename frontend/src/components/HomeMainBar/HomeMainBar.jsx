import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import './HomeMainBar.css'
import { useSelector } from 'react-redux'
import QuestionsList from './QuestionsList'
const HomeMainBar = () => {
  const location = useLocation()
  const user=1;
  const navigate = useNavigate()

  const questionsList = useSelector(state=>state.questionsReducer)

  const checkAuth=()=>
  {
    if(user === null){
      alert("please login!")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          (location.pathname ==='/') ? <h1>Top Questions</h1> : <h1>All Questions</h1> 
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div className='display'>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
          <p>{questionsList.data.length} questions</p>
          <QuestionsList questionsList={questionsList.data}/>
            
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainBar