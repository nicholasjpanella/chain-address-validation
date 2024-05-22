import { NetworkType } from "../types";

const regexByType = {
  mainnet:
    /^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^(?:(bitcoincash:)?(q|p)[a-z0-9]{41})$/,
  testnet: /^(bchtest:|bchreg:)?((q|p)[a-zA-Z0-9]{41})$/,
};

export const bitcoinCashValidations = [
  regexByType.mainnet,
  regexByType.testnet,
];

export function validateBitcoinCashAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return bitcoinCashValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address.trim());
}
