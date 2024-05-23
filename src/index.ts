import { bitcoinValidations } from "./chains/bitcoin";
import { bitcoinCashValidations } from "./chains/bitcoin-cash";
import { etheriumValidations } from "./chains/ethereum";

const ALL_VALIDATIONS = [
  ...bitcoinValidations,
  ...bitcoinCashValidations,
  ...etheriumValidations,
];

export function validateAddress(address: string) {
  return ALL_VALIDATIONS.some((validation) => validation.test(address));
}

export { validateBitcoinAddress } from "./chains/bitcoin";
export { validateBitcoinCashAddress } from "./chains/bitcoin-cash";
export { validateEthereumAddress } from "./chains/ethereum";
