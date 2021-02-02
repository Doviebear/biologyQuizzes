import React from "react";
import "./App.css";
import { useHistory } from "react-router-dom";

function Help() {
  const history = useHistory();
  return (
    <div className="main">
      <div className="header">
        <button onClick={history.goBack} className="buttonText" id="backButton">
          Back
        </button>
        <h1 className="headerTitle">What Am I Doing Here?</h1>
      </div>
      <div className="helpWrapper"></div>
      <h3 className="helpText">Hi! Welcome!</h3>
      <h3 className="helpText">You found the help button, Congrats!</h3>
      <h3 className="helpText">
        This is a quiz program designed to help you prepare for your Bio tests.
        Basically, you choose a quiz, then select the right answer, and don't
        worry if you get it wrong, I'll tell you :). Then, if theres a short
        explanation you'll see it, otherwise you're onto the next question!
      </h3>
      <h3 className="helpText">
        And in case you are wondering, the original questions were created by
        the amazing John, and the current website you see is my doing, Dovie.
      </h3>
      <h3 className="helpText">
        And no I am not an artist, those icons are by{" "}
        <a
          href="https://dryicons.com/icon-packs/science-icon-pack-85"
          style={{ textDecoration: "underline", color: "#80d8f7" }}
        >
          Dryicons
        </a>{" "}
        and yes, I only have this here because I'm legally required too
      </h3>
    </div>
  );
}

export default Help;
