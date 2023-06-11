import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();

  <Route {...rest} element={user ? children : <Navigate to="/" />}>
    {children}
  </Route>;

  return user ? children : <Navigate to="/" />;
};
export default PrivateRoute;
