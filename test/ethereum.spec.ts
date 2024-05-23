// addressValidation.test.ts
import { validateEthereumAddress } from "../src";

describe("Ethereum Address Validation", () => {
  const validAddresses = [
    //Valid EVM address
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    //Valid checksummed address
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
  ];

  const invalidAddresses = [
    //Invalid EVM address
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D8Z",
    //Invalid checksummed address
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D",
    // Invalid checksummed address with typo
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D89",
    // Invalid address missing the 0x
    "32Be343B94f860124dC4fEe278FDCBD38C102D89",
  ];

  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateEthereumAddress(address)).toBe(true);
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateEthereumAddress(address)).toBe(false);
    }
  );
});
