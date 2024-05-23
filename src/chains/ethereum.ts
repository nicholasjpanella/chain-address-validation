import { isAddress } from "@ethersproject/address";
import { NetworkType } from "../types";

/**
 * Validates if a given string is a correct EVM address.
 * @param address - The address string to validate.
 * @param networkType - ignored for this function.
 * @returns true if the address is valid and or correctly checksummed, false otherwise.
 */
export function validateEthereumAddress(
  address: string,
  networkType: NetworkType = "*"
): boolean {
  if (typeof address !== "string") return false;
  if (!String(address).length) return false;
  if (!address.startsWith("0x")) return false;
  networkType;

  return isAddress(address);
}

export const etheriumValidations = [
  {
    test(address) {
      return validateEthereumAddress(address);
    },
  } as RegExp,
];
