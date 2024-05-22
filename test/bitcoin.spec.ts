import { validateBitcoinAddress } from "../src";

describe("Bitcoin Mainnet Address Validation", () => {
  const validAddresses = [
    // P2PKH
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",

    // P2SH
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    "3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC",

    // Bech32 Segwit
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080",
    "bc1p5cyxnuxmeuwuvkwfem96l9pujcz9wvqaq9uxk7",
  ];

  const invalidAddresses = [
    "", // Empty string
    "apple", // Just a word
    "1111111111111111111111111111111111", // proper length, but not a valid address
    "111111111111111111111111111111111111111111", // proper length, but not a valid address

    // Invalid format
    "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn", // Testnet P2PKH address
    "2N3cB6wE4yGkGd3T3jE7Xg5L3F9ikb7J8zj", // Testnet P2SH address
    "tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q5rdh9z6", // Testnet Bech32

    // Invalid characters
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt08!", // Invalid character '!'
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNL$", // Invalid character '$'

    // Invalid length
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7k", // Too short for Bech32
    "3J98t1WpEZ73CNmQviecrnyiW", // Too short for P2SH
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNaEXTRA", // Too long for P2PKH
  ];

  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateBitcoinAddress(address, "mainnet")).toBe(true);
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateBitcoinAddress(address, "mainnet")).toBe(false);
    }
  );
});

describe("Bitcoin Testnet Address Validation", () => {
  const validAddresses = [
    // P2PKH
    "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn",
    "n3ZddxzLvAY9o7184TB4c6FJasAybsw4HZ",

    // P2SH
    "2N3cB6wE4yGkGd3T3jE7Xg5L3F9ikb7J8zj",
    "2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc",

    // Bech32 Segwit
    "tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q5rdh9z6",
    "tb1q9rg5r4m5z6s8z4s7x4suthxv4fhj2s5gxk3yq2",
  ];

  const invalidAddresses = [
    "", // Empty string
    "apple", // Just a word
    "1111111111111111111111111111111111", // proper length, but not a valid address
    "111111111111111111111111111111111111111111", // proper length, but not a valid address

    // Invalid format
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", // Mainnet address
    "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy", // Mainnet address
    "MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc", // Missing the 2
    "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080", // Mainnet Bech32

    // Invalid characters
    "tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q5rdh9z!", // Invalid character '!'
    "2N3cB6wE4yGkGd3T3jE7Xg5L3F9ikb7J8zj$", // Invalid character '$'

    // Invalid length
    "tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q!", // Too short for Bech32
    "2N3cB6wE4yGkGd3T3jE7Xg5L3Fi!", // Too short for P2SH
    "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfnEXTRA", // Too long for P2PKH
  ];

  validAddresses.forEach((address) => {
    test(`should match valid address: ${address}`, () => {
      expect(validateBitcoinAddress(address, "testnet")).toBe(true);
    });
  });

  invalidAddresses.forEach((address) => {
    test(`should not match invalid address: ${address}`, () => {
      expect(validateBitcoinAddress(address, "testnet")).toBe(false);
    });
  });
});
