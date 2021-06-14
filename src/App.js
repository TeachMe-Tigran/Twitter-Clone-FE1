import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
