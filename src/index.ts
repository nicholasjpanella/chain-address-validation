import { bitcoinValidations } from "./chains/bitcoin";
import { bitcoinCashValidations } from "./chains/bitcoin-cash";

const ALL_VALIDATIONS = [...bitcoinValidations, ...bitcoinCashValidations];

export function validateAddress(address: string) {
  return ALL_VALIDATIONS.some((validation) => validation.test(address));
}

export { validateBitcoinAddress } from "./chains/bitcoin";
export { validateBitcoinCashAddress } from "./chains/bitcoin-cash";
