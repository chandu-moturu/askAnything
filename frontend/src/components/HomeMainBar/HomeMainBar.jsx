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


//   var questionsList=[{
//     _id:'1',
//     upVotes:9,
//     downVotes:3,
//     noOfAnswers:10,
//     questionTitle:"who is beautiful",
//     questionBody:"Iam beautiful",
//     questionTags:["C","Ruby","Java"],
//     userPosted:"innocent",
//     askedOn:'sep 8',
//     userId:1,
//     answer: [{
//       answerBody: 'Answer',
//       userAnswered:'kumar',
//       answeredOn:'sep 10',
//       userId:2,
//     }]


// },{
//   _id:'2',
//   upVotes:5,
//   downVotes:1,
//   noOfAnswers:6,
//   questionTitle:"who is beautiful",
//   questionBody:"Iam beautiful",
//   questionTags:["Python","Ruby","Java"],
//   userPosted:"innocent",
//   askedOn:'sep 8',
//   userId:1,
//     answer: [{
//       answerBody: 'Answer',
//       userAnswered:'kumar',
//       answeredOn:'sep 10',
//       userId:2,
//     }]

// },{
//   _id:'3',
//   upVotes:5,
//   downVotes:2,
//   noOfAnswers:5,
//   questionTitle:"who is beautiful",
//   questionBody:"Iam beautiful",
//   questionTags:["C","C++","Java"],
//   userPosted:"innocent",
//   askedOn:'sep 8',
//   userId:1,
//     answer: [{
//       answerBody: 'Answer',
//       userAnswered:'kumar',
//       answeredOn:'sep 10',
//       userId:2,
//     }]

// }]
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