import {React,useState} from 'react'
import { useSelector } from 'react-redux'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const AskQuestion = () => {
    const [questionTitle,setQuestionTitle]=useState('')
    const [questionBody,setQuestionBody]=useState('')
    const [questionTags,setQuestionTags]=useState('')
    const dispatch=useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
      
      dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: User.result.name,userId:User?.result?._id},navigate))
    }
    const handleEnter=(e)=>{
      if(e.key==='Enter'){
        setQuestionBody(questionBody+'\n')
      }
    }
    
  return (
       <div className='ask-question'>
          <div className="ask-ques-container">
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
              <div className='ask-form-container'>
                <label htmlFor="ask-ques-title">
                  <h4>Title</h4>
                  <p>below enter your title</p>
                  <input type="text" onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='enter the things here' id='ask-ques-title' />
                </label>
                <label htmlFor="ask-ques-body">
                  <h4>Body</h4>
                  <p>Write the body here</p>
                  <textarea name="" id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                </label>
                <label htmlFor="ask-ques-tags">
                  <h4>Tags</h4>
                  <p>Mention some Tags</p>
                  <input type="text" placeholder='enter the things here' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} id='ask-ques-tags' />
                </label>
              </div>
              <input type="submit" value="Review your question"  className='review-btn' />
            </form>

          </div>
       </div>
  )
}

export default AskQuestion