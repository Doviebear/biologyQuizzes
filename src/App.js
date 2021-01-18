import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quiz from "./Quiz"
import Home from "./Home"


// ! <a href='https://dryicons.com/icon-packs/science-icon-pack-85'> Icon by Dryicons </a>

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/quiz" component={Quiz} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
