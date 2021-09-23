import { license } from "../mock-license";

export type LicenseItem = {
  text: string;
  list?: LicenseItem[];
  notNumeric?: boolean;
};
export type License = LicenseItem[];

export const getLicense = () => license;
