import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const ethereumValidations = [regexByType.mainnet, regexByType.testnet];

export function validateEthereumAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return ethereumValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
