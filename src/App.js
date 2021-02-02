import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Home from "./Home";
import Help from "./Help";

// ! <a href='https://dryicons.com/icon-packs/science-icon-pack-85'> Icon by Dryicons </a>

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
