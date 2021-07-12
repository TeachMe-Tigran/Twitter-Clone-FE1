import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import LoginScreen from "./pages/LoginScreen";
import PrivateRoute from "./helper/PrivateRoute";
import isAuth from "./helper/isAuth";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(isAuth.isAuthenticated());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <LoginScreen />} />
          <PrivateRoute path="/home" render={(props) => <Home {...props} />} />
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
          <PrivateRoute
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />
          <Route exact path="/messages" render={() => <h4>Messages</h4>} />
          <Route exact path="/bookmarks" render={() => <h4>Bookmarks</h4>} />
          <Route exact path="/lists" render={() => <h4>Lists</h4>} />
          <Route exact path="/profile" render={() => <h4>Profile</h4>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
