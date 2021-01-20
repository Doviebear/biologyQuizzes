import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Quiz() {
  const [quizJson, setQuizJson] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({ answers: [] });
  const [showQuestion, setShowQuestion] = useState(true);

  // TODO load in json based on url using match
  useEffect(() => {
    setQuizJson(require("./data/testing.json"));
    console.log("updated Quiz Json, it is now: ");
    console.log(quizJson);
  });

  useEffect(() => {
    console.log("Running useEffect on quizJson update");
    if (quizJson.questions !== undefined) {
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
            return (
              <button
                className="answerButton"
                onClick={answerButtonPressed}
                value={answer.correct}
              >
                {answer.answerText}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  var Explanation = () => {
    return (
      <div className="explanationWrapper">
        <h3 className="explanationText">{currentQuestion.explanationText}</h3>
        <button
          className="buttonText"
          id="explanationButton"
          onClick={explanationButtonPressed}
        >
          Next Question
        </button>
      </div>
    );
  };

  function answerButtonPressed(e) {
    console.log("Answer button pressed, value is: ");
    console.log(e.target.value);
    if (e.target.value === "true") {
      console.log("Found the right answer");
      setShowQuestion(false);
    } else {
      e.target.style.color = "#eb4460";
    }
  }

  function explanationButtonPressed(e) {
    var nextQuestion;
    for (var i = 0; i < quizJson.questions.length; i++) {
      const question = quizJson.questions[i];
      if (question === currentQuestion) {
        console.log("found same question!");
        nextQuestion = i + 1;
        break;
      }
    }
    setCurrentQuestion(quizJson.questions[nextQuestion]);
    setShowQuestion(true);
  }
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
        {showQuestion ? <Question /> : <Explanation />}
      </div>
    </div>
  );
}

export default Quiz;
