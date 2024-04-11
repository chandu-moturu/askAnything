import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes'
// import Home from './pages/Home/Home'
import {fetchAllQuestion} from './actions/question'
import { fetchAllUsers } from './actions/Users';


function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestion())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div>
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
   
    </div>

  );
}

export default App;
