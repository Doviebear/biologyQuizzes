import React from "react";
import {Link} from "react-router-dom";

function Home () {
    return (
        <div>
            <h1>HOME!</h1>  
            <Link to="/quiz">TO THE QUIZ!</Link>
        </div>
    );
}

export default Home;