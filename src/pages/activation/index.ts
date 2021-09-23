import { reflect } from "@effector/reflect";

import { libLicense, modelLicense } from "entities/license";
import { modelViewer } from "entities/viewer";
import { actions, stores } from "./model";

import View from "./ui";

const HomePage = reflect({
  view: View,
  bind: {
    step: stores.$activationStep,
    nextStep: actions.nextStep,
    getLicense: libLicense.getLicense,
    agreeLicense: modelLicense.states.$agreeLicens,
    isDisabledBtnNextStep: modelLicense.states.$agreeLicens.map((v) => !v),
    licenseActivate: modelLicense.actions.activate,
    licenseDeactivate: modelLicense.actions.deactivate,
    isDeisabledBtnCreated: modelViewer.stores.$createButtonIsDisabled,
  },
});

export default HomePage;
