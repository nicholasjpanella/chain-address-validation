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
  networkType: NetworkType = "mainnet"
) {
  if (!String(address.trim()).length) return false;
  return regexByType[networkType].test(address.trim());
}
