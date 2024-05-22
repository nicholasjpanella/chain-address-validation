import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const dashValidations = [regexByType.mainnet, regexByType.testnet];

export function validateDashAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return dashValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
