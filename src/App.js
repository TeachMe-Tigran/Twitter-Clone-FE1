import "./App.css";
import LeftSidebar from "./views/LeftSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RightSidebar from "./views/RightSidebar";
import Home from "./views/Home";
import Profile from "./views/profile/Profile";

function App(props) {
  return (
    <Router>
      <div className="App">
        <LeftSidebar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/explore" render={() => <h4>Explore</h4>} />
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
            render={(props) => <Profile {...props} />}
          />
          <Route exact path="/messages" render={() => <h4>Messages</h4>} />
          <Route exact path="/bookmarks" render={() => <h4>Bookmarks</h4>} />
          <Route exact path="/lists" render={() => <h4>Lists</h4>} />
          <Route exact path="/profile" render={() => <h4>Profile</h4>} />
        </Switch>
        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;
