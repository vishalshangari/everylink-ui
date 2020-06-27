import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }: RouteProps) => {
  if (!Component) return null;
  return (
    <Route
      {...props}
      render={(props) => {
        return true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
