import React, { useState, } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([]);

  
  function handleDeletedItem(deletedQuestion){
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question)=>{
        return <ul key={question.id}><QuestionItem question={question} updateQuestions={handleDeletedItem}/></ul>
      })}
    </section>
  );
}


export default QuestionList;
