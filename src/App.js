import "./App.css";
import LeftSidebar from "./views/LeftSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RightSidebar from "./views/RightSidebar";
import AddTweetBox from "./views/AddTweetBox";
import Profile from "./views/profile/Profile"
import LandingPage from "./views/landing_page/LandingPage"
import WrapNavPages from "./views/home/Home"

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* <LeftSidebar /> */}
        <Switch>
          {/* <Route
            exact
            path="/home"
            render={() => <AddTweetBox>Home</AddTweetBox>}
          /> */}
          <Route
            exact
            path="/home"
            render={() => <WrapNavPages><AddTweetBox/></WrapNavPages>}
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
            render={(props) => <Profile {...props} />}
          />
        </Switch>
        {/* <RightSidebar /> */}
      </div>
    </Router>
  );
}

export default App;
