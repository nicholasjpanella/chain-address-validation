import { validateCardanoAddress } from "../src";

describe("Cardano Mainnet Address Validation", () => {
  const validAddresses = [
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m5",
    "addr1z8phkx5z5z5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5",
  ];

  const invalidAddresses = [
    "addr2qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m5", // invalid prefix
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5", // too short
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m5abcd", // too long
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m$", // invalid character
    "addr_test2qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s", // invalid prefix
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f", // too short
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5sabcd", // too long
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5q5s5m5f5n5q5s5m5f5@", // invalid character
  ];
  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateCardanoAddress(address, "mainnet")).toBe(true);
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateCardanoAddress(address, "mainnet")).toBe(false);
    }
  );
});

describe("Cardano Testnet Address Validation", () => {
  const validAddresses = [
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s",
    "addr_test1wz5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f",
  ];

  const invalidAddresses = [
    "addr2qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m5", // invalid prefix
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5", // too short
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m5abcd", // too long
    "addr1qy0h5x5mnj0q0qz3t4g5g5c9k9mwx5s5l5n5f5n5q5z5qq5s5m5f5q5s5qnq5f5m$", // invalid character
    "addr_test2qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s", // invalid prefix
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f", // too short
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5s5m5f5q5s5m5f5n5q5sabcdasdf", // too long
    "addr_test1qpz5z5f5n5q5s5m5f5n5q5s5m5f5q5s5m5f5q5s5m5f5n5q5s5m5f5@", // invalid character
  ];
  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateCardanoAddress(address, "testnet")).toBe(true);
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateCardanoAddress(address, "testnet")).toBe(false);
    }
  );
});
