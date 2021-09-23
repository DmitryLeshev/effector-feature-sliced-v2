import React from "react";
import { LicenseItem, License } from "../lib";

type UserAgreementItemProps = LicenseItem & {
  numeric: string;
};

const UserAgreementItem = ({
  numeric,
  list,
  text,
  notNumeric,
}: UserAgreementItemProps) => {
  return (
    <li className={"item"}>
      {!notNumeric && <span className={"numeric"}>{numeric}</span>} {text}
      {list && list.length > 0 && (
        <UserAgreementList data={list} numeric={numeric} />
      )}
    </li>
  );
};

export type UserAgreementCardProps = {
  data: License;
  numeric?: string;
};

export const UserAgreementList = ({
  data,
  numeric,
}: UserAgreementCardProps) => {
  return (
    <ul className="agreement__list list">
      {data.map((item, idx) => (
        <UserAgreementItem
          key={idx}
          numeric={numeric ? `${numeric}${idx + 1}.` : `${idx + 1}.`}
          {...item}
        />
      ))}
    </ul>
  );
};
