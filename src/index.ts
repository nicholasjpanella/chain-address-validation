import { bitcoinValidations } from "./chains/bitcoin";

const ALL_VALIDATIONS = [...bitcoinValidations];

export function validateAddressAgnostic(address: string) {
  return ALL_VALIDATIONS.some((validation) => validation.test(address));
}

export { validateBitcoinAddress } from "./chains/bitcoin";
