import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { paths } from "shared/config";

import LogInPage from "./login";
import HomePage from "./home";
import ActivationPage from "./activation";

export const Routing = ({ isAuth }: { isAuth: boolean }) => {
  const isActivation = true;

  const renderRoutes = isActivation
    ? IS_NOT_ACTIVATION_ROUTES
    : isAuth
    ? IS_AUTH_ROUTES
    : IS_NOT_AUTH_ROUTES;

  const rederictLink = isActivation
    ? "/activation"
    : isAuth
    ? "/home"
    : "/login";

  return (
    <Switch>
      {renderRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      <Redirect to={rederictLink} />
    </Switch>
  );
};

const IS_AUTH_ROUTES = [
  { exact: true, path: paths.home(), component: HomePage },
];

const IS_NOT_AUTH_ROUTES = [
  { exact: true, path: paths.login(), component: LogInPage },
];

const IS_NOT_ACTIVATION_ROUTES = [
  { exact: true, path: paths.activation(), component: ActivationPage },
];
