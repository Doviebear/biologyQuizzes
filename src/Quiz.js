import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Quiz() {
  const [quizJson, setQuizJson] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});

  // TODO load in json based on url using match
  useEffect(() => {
    setQuizJson(require("./data/testing.json"));
    console.log("updated Quiz Json, it is now: ");
    console.log(quizJson);
  });

  useEffect(() => {
    console.log("Running useEffect on quizJson update");
    if (quizJson !== null) {
      setCurrentQuestion(quizJson.questions[0]);
      console.log("currentQuestion is:");
      console.log(currentQuestion);
    }
  }, [quizJson]);

  var Question = () => {
    return (
      <div className="questionWrapper">
        <h3 className="questionText">{currentQuestion.questionText}</h3>
        <div className="answerArray">
          {currentQuestion.answers.map((answer) => {
            return <button>{answer.answerText}</button>;
          })}
        </div>
      </div>
    );
  };

  var Explanation = () => {
    return <h1>Explanation!</h1>;
  };

  return (
    <div className="main">
      <div className="header">
        <Link to="/" className="buttonText" id="backButton">
          Back
        </Link>

        <h1 className="headerTitle">Biology Quizzes</h1>
        <h2 className="buttonText" id="helpButton">
          ?
        </h2>
      </div>
      <div className="quizPage">
        {<Question /> ? <Question /> : <Explanation />}
      </div>
    </div>
  );
}

export default Quiz;
