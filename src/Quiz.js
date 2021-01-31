import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Quiz() {
  const [quizJson, setQuizJson] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({ answers: [] });
  const [showQuestion, setShowQuestion] = useState(true);
  const [showQuiz, setShowQuiz] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const allQuizData = require("./data/quizData.json");
    const myQuizData = allQuizData[id];
    setQuizJson(myQuizData);
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

  var QuizPage = () => {
    return (
      <div className="quizPage">
        {showQuestion ? <Question /> : <Explanation />}
      </div>
    );
  };

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

  var EndScreen = () => {
    return (
      <div className="explanationWrapper">
        <h3 className="explanationText">Boo!</h3>
        <Link to="/" className="buttonText" id="endScreenButton">
          Go Back to Quizzes
        </Link>
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
    console.log("Next Question is: ");
    console.log(nextQuestion);
    if (nextQuestion !== quizJson.questions.length) {
      setCurrentQuestion(quizJson.questions[nextQuestion]);
      setShowQuestion(true);
    } else {
      console.log("No more questions!");
      setShowQuiz(false);
    }
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
      {showQuiz ? <QuizPage /> : <EndScreen />}
    </div>
  );
}

export default Quiz;
