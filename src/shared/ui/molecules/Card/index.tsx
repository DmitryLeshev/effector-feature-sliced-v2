import React from "react";

import clsx from "clsx";

import { Atom } from "shared/ui";

import "./styles.scss";

interface Props {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: any;
  bodyProps?: any;
  footerProps?: any;
}

export const Card: React.FC<Props> = ({
  header,
  body,
  footer,
  className,
  bodyProps = {},
  footerProps = {},
}) => {
  const { className: classNameBody, ...bProps } = bodyProps;
  const { className: classNameFooter, ...fProps } = footerProps;

  const renderHeader = header && (
    <>
      <div className={"card__header"}>{header}</div>
      <Atom.Divider />
    </>
  );

  const renderBody = body && (
    <>
      <div className={clsx("card__body", classNameBody)} {...bProps}>
        {body}
      </div>
      {footer && <Atom.Divider />}
    </>
  );

  return (
    <div className={clsx("card", className)}>
      {renderHeader}
      {renderBody}
      {footer && (
        <div className={clsx("card__footer", classNameFooter)} {...fProps}>
          {footer}
        </div>
      )}
    </div>
  );
};
