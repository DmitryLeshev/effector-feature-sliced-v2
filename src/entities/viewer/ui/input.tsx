import React from "react";

import { useStore } from "effector-react";

import type { CreateInput } from "../lib";

type Props = { input: CreateInput; label?: string };

export const Input: React.FC<Props> = ({ input, label }) => {
  const value = useStore(input.$value);
  const errorMsg = useStore(input.$errorMessage);
  return (
    <label>
      {label}
      <input value={value} onChange={(e) => input.onChange(e.target.value)} />
      {errorMsg}
    </label>
  );
};
