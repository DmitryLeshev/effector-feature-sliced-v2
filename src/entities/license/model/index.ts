import { createDomain, createApi } from "effector";

const licensDomain = createDomain("licensDomain");

const $agreeLicens = licensDomain.createStore(false, { sid: "$agreeLicens" });

const { activate, deactivate } = createApi($agreeLicens, {
  activate: () => true,
  deactivate: () => false,
});

export const states = { $agreeLicens };
export const actions = { activate, deactivate };
