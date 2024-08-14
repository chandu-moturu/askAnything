import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./HomeMainBar.css";
import { useSelector } from "react-redux";
import QuestionsList from "./QuestionsList";

const HomeMainBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const location = useLocation();
  const user = 1; 
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  useEffect(() => {
    // console.log(questionsList.data)
    if (questionsList.data) {
      const filtered = questionsList.data.filter(
        
        (question) =>
          question.questionTitle &&
          typeof question.questionTitle[0] === "string" &&
          question.questionTitle[0]
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      
      setFilteredQuestions(filtered);
    }
  }, [searchTerm, questionsList]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(questionsList)
  };

  const checkAuth = () => {
    if (user === null) {
      alert("Please login!");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search questions..."
            />
          </div>
          <button onClick={checkAuth} className="ask-btn">
            Ask Questions
          </button>
        </div>
      </div>
      <div className="display">
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>
              {searchTerm
                ? filteredQuestions.length
                : questionsList.data.length}{" "}
              questions
            </p>
            <QuestionsList
              questionsList={
                searchTerm ? filteredQuestions : questionsList.data
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
