import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const litecoinValidations = [regexByType.mainnet, regexByType.testnet];

export function validateLitecoinAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return litecoinValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
