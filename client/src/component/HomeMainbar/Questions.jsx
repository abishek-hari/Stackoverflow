import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes'>
        <div className='display-votes-ans'>
          <p>{question.upVotes?.length - question.downVotes?.length || 0}</p>
          <p>Votes</p>
        </div>
        <div className='display-votes-ans'>
          <p>{question.noOfAnswers}</p>
          <p>answers</p>
        </div>
      </div>
      <div className='display-question-details'>
        <Link to={`/Questions/${question._id}`} className='question-title-link'>
          {question.questionTitle}
        </Link>

        <div className='display-tags-time'>
          <div className='display-tags'>
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <div className='display-time'>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
