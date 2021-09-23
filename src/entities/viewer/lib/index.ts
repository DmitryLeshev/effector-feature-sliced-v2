import { createApi, createDomain, sample } from "effector";

function not(v: boolean) {
  return !v;
}

type Rule = (value: string) => string | null;

interface FilterParams {
  validationRules?: Rule[];
}

export function createInput(inputName: string, options?: FilterParams) {
  const inputDomain = createDomain(inputName);

  const $validaionRules = inputDomain.createStore(
    options?.validationRules ?? []
  );

  const $value = inputDomain.createStore("");
  const onChange = inputDomain.createEvent<string>();

  $value.on(onChange, (_, newValue) => newValue);

  const $errorMessages = inputDomain.createStore<(string | null)[]>([]);

  sample({
    source: $validaionRules,
    clock: onChange,
    fn: (rules, value) => rules.map((rule) => rule(value)),
    target: $errorMessages,
  });

  const $errorMessage = $errorMessages.map(
    (messages) => messages.find((msg) => msg) ?? false
  );

  const $isNotValid = $errorMessage.map((message) => !!message);

  $errorMessages.watch((state) => console.log("errorMessages", state));
  $errorMessage.watch((state) => console.log("errorMessage", state));

  return { $value, onChange, $errorMessage, $isNotValid, $errorMessages };
}

export type CreateInput = ReturnType<typeof createInput>;
