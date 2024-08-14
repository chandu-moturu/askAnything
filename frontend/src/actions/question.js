// import React from 'react'
import * as api from '../api'

export const askQuestion = (questionData,navigate) =>async (dispatch)=> {
 try{
    const {data} =await api.postQuestion(questionData)
    dispatch({type: "POST_QUESTION", payload:data})
    dispatch(fetchAllQuestion())
    navigate('/')
 }
 catch(error)
 {
    console.log(error)
 }
}
export const fetchAllQuestion=()=>async(dispatch)=>{
   try{
      const {data}=await api.getAllQuestions()
      dispatch({type: 'FETCH_ALL_QUESTIONS',payload: data})
   }
   catch(error){
      console.log(error)
   }
}
export const deleteQuestion=(_id,navigate)=>async (dispatch)=>{
   try{
      await api.deleteQuestion(_id)
      dispatch(fetchAllQuestion())
      navigate('/')
   }
   catch(error){
      console.log(error)
   }
}

export const voteQuestion=(_id,value,userId)=>async (dispatch)=>{
   try{
      await api.voteQuestion(_id,value,userId)
      dispatch(fetchAllQuestion())
   }
   catch(error)
   {
      console.log(error)
   }
}


export const postAnswer = (answerData) => async (dispatch) => {
   try{
      console.log('answerda',answerData)
      const {id,noOfAnswers,answerBody,userAnswered,userId,pic}= answerData
   
      const {data}= await api.postAnswer(id, noOfAnswers, answerBody, userAnswered ,userId ,pic)
      console.log(data)
      dispatch({type:'POST_ANSWER', payload: data})
      dispatch(fetchAllQuestion())
   }
   catch(error)
   {
      console.log(error)
   }
   
}

export const deleteAnswer = (_id,answerId,noOfAnswers)=>async (dispatch)=>{
   try{
      await api.deleteAnswer(_id,answerId,noOfAnswers)
      dispatch(fetchAllQuestion())
   }
   catch(error){
      console.log(error)
   }
}