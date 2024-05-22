import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const cardanoValidations = [regexByType.mainnet, regexByType.testnet];

export function validateCardanoAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return cardanoValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
