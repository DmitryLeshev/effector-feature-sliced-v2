import React from "react";
import { RouteChildrenProps } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { reflect } from "@effector/reflect";

type Props = RouteChildrenProps<{}> & {
  isLoading: boolean;
};

const View = ({ match, isLoading }: Props) => {
  const { t } = useTranslation();

  async function logIn() {
    console.log("Login");
  }

  console.log("[Page] login", { isLoading });
  return <h1>Page login</h1>;
};

const LoginPage = reflect({
  view: View,
  bind: {},
});

export default LoginPage;
