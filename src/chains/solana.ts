import { NetworkType } from "../types";

const regexByType = {
  mainnet: /^(.*)$/,
  testnet: /^(.*)$/,
};

export const solanaValidations = [regexByType.mainnet, regexByType.testnet];

export function validateSolanaAddress(
  address: string,
  networkType: NetworkType = "*"
) {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (networkType === "*")
    return solanaValidations.some((regex) => regex.test(address));
  return regexByType[networkType].test(address);
}
