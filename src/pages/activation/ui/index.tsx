import React from "react";

import { RouteChildrenProps } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { UILicense, libLicense } from "entities/license";
import { modelViewer, UIViewer } from "entities/viewer";

import { Atom, Molec } from "shared/ui";

import type { Step } from "../model";

import "./styles.scss";

type Props = RouteChildrenProps<{}> & {
  step: Step;
  nextStep: () => void;
  getLicense: () => libLicense.License;
  agreeLicense: boolean;
  isDisabledBtnNextStep: boolean;
  licenseActivate: () => void;
  licenseDeactivate: () => void;
  isDeisabledBtnCreated: boolean;
};

const HomePage: React.FC<Props> = ({
  nextStep,
  step,
  agreeLicense,
  licenseActivate,
  licenseDeactivate,
  isDisabledBtnNextStep,
  isDeisabledBtnCreated,
}) => {
  const { t } = useTranslation();

  const footerStepLicense = (
    <>
      <input
        type="checkbox"
        checked={agreeLicense}
        onChange={(e) => {
          if (e.target.checked) {
            licenseActivate();
          } else licenseDeactivate();
        }}
      />
      <button disabled={isDisabledBtnNextStep} onClick={nextStep}>
        next step
      </button>
    </>
  );

  const bodyViewer = (
    <>
      <UIViewer.Input input={modelViewer.login} label={t("viewer:login")} />
      <UIViewer.Input
        input={modelViewer.password}
        label={t("viewer:password")}
      />
      <UIViewer.Input
        input={modelViewer.repeatedPasswrod}
        label={t("viewer:repeated-password")}
      />
    </>
  );

  const footerViewer = (
    <>
      <Atom.Button disabled={isDeisabledBtnCreated}>Create</Atom.Button>
    </>
  );

  return (
    <div className={"page"}>
      <Molec.Card
        header={step}
        body={
          step === "license" ? (
            <UILicense.UserAgreementList data={libLicense.getLicense()} />
          ) : (
            bodyViewer
          )
        }
        footer={step === "license" ? footerStepLicense : footerViewer}
      />
    </div>
  );
};

export default HomePage;
