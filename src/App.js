import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTwittBox from "./components/addTwittBox";
import Profile from "./components/profile"
import LandingPage from "./views/landing_page"
import WrapNavPages from "./components/wrapNavPages"

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <WrapNavPages><AddTwittBox/></WrapNavPages>}
          />
          <Route
            exact
            path="/"
            render={() => <LandingPage />}
          />
          <Route
            exact
            path="/explore"
            render={() => <h1 style={{ color: `#fff` }}>Explore</h1>}
          />
          <Route
            exact
            path="/notifications"
            render={() => <h1 style={{ color: `#fff` }}>Notifications</h1>}
          />
          <Route
            exact
            path="/messages"
            render={() => <h1 style={{ color: `#fff` }}>Messages</h1>}
          />
          <Route
            exact
            path="/bookmarks"
            render={() => <h1 style={{ color: `#fff` }}>Bookmarks</h1>}
          />
          <Route
            exact
            path="/lists"
            render={() => <h1 style={{ color: `#fff` }}>Lists</h1>}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <WrapNavPages><Profile {...props} /></WrapNavPages>}

          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
