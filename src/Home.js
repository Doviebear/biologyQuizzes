import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import cell_icon from "./img/menu/cell_icon.png";
import biochemistry_icon from "./img/menu/biochemistry_icon.png";
import virus_icon from "./img/menu/virus_icon.png";
import dna_icon from "./img/menu/dna_icon.png";
import physiology_icon from "./img/menu/physiology_icon.png";
import evolution_icon from "./img/menu/evolution_icon.png";

function Home() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="headerTitle">Biology Quizzes</h1>
        <Link to="/help" className="buttonText" id="helpButton">
          ?
        </Link>
      </div>
      <div className="buttonArray">
        <Link to="quiz/cell" className="menuButtonWrapper">
          <img src={cell_icon} alt="cell" className="menuImg" />
          <span className="buttonText">Cell Biology</span>
        </Link>
        <Link to="quiz/biochemistry" className="menuButtonWrapper">
          <img src={biochemistry_icon} alt="biochemistry" className="menuImg" />
          <span className="buttonText">Biochemistry</span>
        </Link>
        <Link to="quiz/mitosis-and-viruses" className="menuButtonWrapper">
          <img src={virus_icon} alt="virus" className="menuImg" />
          <span className="buttonText">Mitosis and Viruses</span>
        </Link>
        <Link to="quiz/dna" className="menuButtonWrapper">
          <img src={dna_icon} alt="DNA" className="menuImg" />
          <span className="buttonText">DNA and Genetic Engineering</span>
        </Link>
        <Link to="quiz/physiology" className="menuButtonWrapper">
          <img src={physiology_icon} alt="microscope" className="menuImg" />
          <span className="buttonText">Physiology</span>
        </Link>
        <Link to="quiz/evolution" className="menuButtonWrapper">
          <img src={evolution_icon} alt="evolution" className="menuImg" />
          <span className="buttonText">Evolution and Reproduction</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
