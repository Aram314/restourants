import React from "react";
import { Route } from "react-router-dom";

import SuspenseLoader from "../components/SuspenseLoader";

const SuspenseRoute = ({ component: Component, children, ...props }) => {
  if (Component) {
    return (
      <Route {...props}>
        <SuspenseLoader>
          <Component />
        </SuspenseLoader>
      </Route>
    );
  }
  if (children) {
    return (
      <Route {...props}>
        <SuspenseLoader>{children}</SuspenseLoader>
      </Route>
    );
  }
};

export default SuspenseRoute;
