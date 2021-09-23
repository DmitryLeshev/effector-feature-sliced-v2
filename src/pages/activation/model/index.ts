import { createDomain } from "effector";

const activationDomain = createDomain("");

export type Step = "license" | "create-viewer";
const $activationStep = activationDomain.createStore<Step>("license");

const nextStep = activationDomain.createEvent();
$activationStep.on(nextStep, () => "create-viewer");

export const stores = { $activationStep };
export const actions = { nextStep };
