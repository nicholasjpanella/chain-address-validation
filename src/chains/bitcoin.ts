import { NetworkType } from "../types";

const regexByType = {
  mainnet:
    /^(1(?![1]{24,33}$)[1-9A-HJ-NP-Za-km-z][a-km-zA-HJ-NP-Z1-9]{24,33}|3[a-km-zA-HJ-NP-Z1-9]{25,34}|bc1([ac-hj-np-z02-9]{39,59}))$/,
  testnet: /^(tb1[a-z0-9]{39,59}|[2mn][1-9A-HJ-NP-Za-km-z]{25,34})$/,
};

export const bitcoinValidations = [regexByType.mainnet, regexByType.testnet];

export function validateBitcoinAddress(
  address: string,
  networkType: NetworkType = "mainnet"
) {
  if (!String(address).length) return false;
  return regexByType[networkType].test(address);
}
