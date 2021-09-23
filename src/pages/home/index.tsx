import React from "react";

import { RouteChildrenProps } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { reflect } from "@effector/reflect";

type Props = RouteChildrenProps<{}> & {};

const View = ({ match }: Props) => {
  const { t } = useTranslation();

  return <h1>Home Page</h1>;
};

const HomePage = reflect({
  view: View,
  bind: {},
});

export default HomePage;
