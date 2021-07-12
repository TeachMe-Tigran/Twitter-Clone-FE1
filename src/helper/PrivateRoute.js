import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../components/PrivateLayout";
import isAuth from "./isAuth";

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.isAuthenticated()) {
          return (
            <PrivateLayout>
              <Component {...props} />
            </PrivateLayout>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
