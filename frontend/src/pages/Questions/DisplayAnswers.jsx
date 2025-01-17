import React from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { deleteAnswer } from "../../actions/question";

const DisplayAnswers = ({ question, handleShare }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/users/${ans.userId}`}
                className="user-link"
                style={{ color: "#76ABAE" }}
              >
                <img
                  src={ans.pic}
                  alt="User profile"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                />
                <div color="#76ABAE">{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswers;
