import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const dogeValidations = [regexByType.mainnet, regexByType.testnet];

export function validateDogeAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return dogeValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
