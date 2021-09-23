import React from "react";

import clsx from "clsx";

export type Props = {
  children: React.ReactElement;
  isAuth: boolean;
};

export function Layout({ children }: Props) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
