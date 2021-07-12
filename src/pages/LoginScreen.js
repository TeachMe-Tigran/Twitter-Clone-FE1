import "./LoginScreen.css";
import React, { useState } from "react";
import TwitterIcon from "../components/TwitterIcon";
import { useDispatch } from "react-redux";
import { sendLoginFormData } from "../store/actions";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginValues, setLoginValues] = useState({
    email: ``,
    password: ``,
  });
  let [loginFilled, setLoginFilled] = useState(false);

  const handleChange = ({ target: input }) => {
    const _loginValues = { ...loginValues };
    _loginValues[input.name] = input.value;

    const { email, password } = _loginValues;

    if (email && password) {
      setLoginFilled(true);
    }
    setLoginValues(_loginValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      sendLoginFormData(
        { email: loginValues.email, password: loginValues.password },
        history
      )
    );
  };
  return (
    <div>
      <form className="loginContainer">
        <TwitterIcon fontSize="large" className="loginTwittericon" />
        <h1>Log in to Twitter</h1>
        <Input
          type="email"
          label="Email"
          name="email"
          value={loginValues.email}
          autoComplete="current-email"
          className="loginTextField"
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={loginValues.password}
          autoComplete="current-password"
          className="loginTextField"
          onChange={handleChange}
        />
        <div>
          {!loginFilled ? (
            <button
              disabled={!loginFilled}
              className="loginButton disableTweetBoxButton"
            >
              Log in
            </button>
          ) : (
            <button
              disabled={!loginFilled}
              className="loginButton"
              onClick={handleSubmit}
            >
              Log in
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default React.memo(LoginScreen);
