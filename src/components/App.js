import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [, setQuestions] = useState([])
  
  function fetchQuestions() {
    fetch('http://localhost:4000/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
