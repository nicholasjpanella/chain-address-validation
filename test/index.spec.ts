import { validateAddress } from "../src";

describe("Chain Agnostic Address Validation", () => {
  test.each([
    ["bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080"],
    ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"],
    ["3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"],
    ["mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn"],
    ["2N3cB6wE4yGkGd3T3jE7Xg5L3F9ikb7J8zj"],
    ["tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q5rdh9z6"],
    ["bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy"],
    ["bchtest:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a"],
  ])("VALID: %s", (address) => {
    expect(validateAddress(address)).toBeTruthy();
  });
  test.each([
    ["bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt08!"],
    ["3J98t1WpEZ73CNmQviecrnyiWrnqRhWNL$"],
    ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNaEXTRA"],
    ["tb1q5y54k5cd5sqz9z3e5j7k2m9xg9u5t3q5rdh9z!"],
    ["2N3cB6wE4yGkGd3T3jE7Xg5L3Fi!"],
    ["mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfnEXTRA"],
    ["bcetest:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a"],
    ["pzkst4xhr5gamvgpzvyh44x80275rmglyvpzgln0"],
  ])("INVALID : %s", (address) => {
    expect(validateAddress(address)).toBeFalsy();
  });
});
