import axios from 'axios'

const API = axios.create({ baseURL: "https://ask-backend-8ffr.onrender.com/" });
// https://ask-backend-8ffr.onrender.com/
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile'))
    {
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('user/login',authData);
export const signUp = (authData) => API.post('user/signup',authData);

export const postQuestion =(questionData)=>API.post('/questions/Ask',questionData);
export const getAllQuestions=()=>API.get('/questions/get');
export const deleteQuestion =(id)=>API.delete(`/questions/delete/${id}`);
export const voteQuestion =(id, value)=>API.patch(`/questions/vote/${id}`,{value})

export const postAnswer=(id,noOfAnswers,answerBody,userAnswered,userId,pic)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId,pic});
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{answerId,noOfAnswers});

export const fetchAllUsers=()=>API.get('/user/getAllUsers');
export const updateProfile=(id,updateData)=>API.patch(`/user/update/${id}`,updateData)
