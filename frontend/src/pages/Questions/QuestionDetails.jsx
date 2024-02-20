import React,{useState} from 'react'
import moment from 'moment'
import { useParams , Link,useNavigate,useLocation} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import copy from 'copy-to-clipboard'

import { voteQuestion } from '../../actions/question'

import upvote from '../../assets/uparrow.png'
import downvote from '../../assets/downarrow.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import { postAnswer ,deleteQuestion} from '../../actions/question'
const QuestionDetails = () => {
    
    const { id } = useParams()
    const questionsList = useSelector(state=>state.questionsReducer)
    
    const [Answer,setAnswer] = useState('')
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const location=useLocation()
    const url='http://localhost:3000'


    const handlePostAns=(e,answerLength)=>{
        e.preventDefault();
        if(User===null){
            alert('login/signup to answer a question')
            Navigate('/Auth')
            
        }
        else{
            if(Answer==='')
            {
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers: answerLength+1, answerBody:Answer, userAnswered:User.result.name, userId:User.result._id},Navigate))
                
            }
        }
    }

    const handleShare=()=>{
        copy(url+location.pathname)
        alert('Copied url :'+url+location.pathname)
    }

    const handleDelete=()=>{
        dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote=()=>{
        dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownVote=()=>{
        dispatch(voteQuestion(id,'downVote',User.result._id))
    }



  return (
    <div className='question-details-page'>
        {
        questionsList.data === null ?
        <h1>Loading...</h1> :
        <>
            {
                questionsList.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container section'>
                            <h1>{question.questionTitle}</h1>
                            <div className='qustion-details-container-2'>
                                <div className="question-votes">
                                    <img src={upvote} alt="upvote" width='18' className='votes-icon' onClick={handleUpVote}/>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt="downvote" width='18' className='votes-icon' onClick={handleDownVote}/>
                                </div>
                                <div style={{width:"100%"}} >
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag)=>{
                                                return <p key={tag}>{tag}</p>
                                            })
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                 User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>

                                                )
                                            }
                                            
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/users/${question.userId}`} className='user-link' style={{color: 'black' }}>
                                                <Avatar backgroundColor="orange" px="10px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {
                            question.noOfAnswers !==0 && (
                                <section className='section'>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                                </section>
                            )
                                
                        }

                        <section className="post-ans-container section">
                            <h3>Your Answer</h3>
                            <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                                <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setAnswer(e.target.value)}></textarea>
                                <input type="Submit" className='post-ans-btn'  value='Post Your Answer' />
                            </form>
                            <p>
                                Browser other question questionTags
                                {
                                    question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                    )
                                    )
                                }
                                or
                                <Link to='/AskQuestion' style={{textDecoration: "none",color:"black"}}>Ask your Own question</Link>

                            </p>
                        </section>

                    </div>
                ))
            }
        </>
}
    </div>
  )
}

export default QuestionDetails