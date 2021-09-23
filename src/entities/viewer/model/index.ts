import { combine, createDomain } from "effector";

import { createInput } from "../lib";
import { validations } from "shared/utils";

const viewerDomain = createDomain("viewer-domain");

export const login = createInput("login", {
  validationRules: [
    validations.required,
    validations.minValue(5),
    validations.maxLength(16),
  ],
});
export const password = createInput("password");
export const repeatedPasswrod = createInput("repeatedPasswrod");

const craeteButtonClicked = viewerDomain.createEvent();

const $createButtonIsDisabled = combine(
  login.$value,
  password.$value,
  repeatedPasswrod.$value,
  (login, password, repeatedPasswrod) => {
    if (!login || !password || !repeatedPasswrod) return true;
    return false;
  }
);

const createViewerFx = viewerDomain.createEffect();

export const stores = { $createButtonIsDisabled };
export const actions = { craeteButtonClicked };

// const changeLogin = viewerDomain.createEvent<string>();
// const changePassword = viewerDomain.createEvent<string>();
// const changeRepeadPassword = viewerDomain.createEvent<string>();

// const login = viewerDomain.createStore("");
// const password = viewerDomain.createStore("");
// const repeatedPasswrod = viewerDomain.createStore("");
