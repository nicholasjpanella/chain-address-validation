import { validateBitcoinCashAddress } from "../src";
import { bitcoinCashValidations } from "../src/chains/bitcoin-cash";

describe("Bitcoin Cash Mainnet Address Validation", () => {
  const validAddresses = [
    "1BpEi6DfDAUFd7GtittLSdBeYJvcoaVggu",
    "1KXrWXciRDZUpQwQmuM1DbwsKDLYAYsVLR",
    "3CWFddi6m4ndiGyKqzYvsFYagqDLPVMTzC",
    "3LDsS579y7sruadqu11beEJoTjdFiFCdX4",
    "31nwvkZwyPdgzjBJZXfDmSWsC4ZLKpYyUw",
    "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
    "bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy",
    "bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq",
    "bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e",
    "bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37",
  ];

  const invalidAddresses = [
    "bitcoincash:xyzqsznhks23z7629mms6s4cwef74vcwvy22gdx6a", // Invalid CashAddr prefix
    "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx", // Invalid CashAddr length
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN@", // Invalid character in Legacy
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN", // Too short Legacy address
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa12345", // Too long Legacy address
    "2A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", // Invalid Legacy prefix
    "0x6f46cf5569aefa1acc1009290c8e043747172d89",
    "LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst",
    "XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh",
    "0xsfdlffsjksldfj[IPv6:2001:db8::2]",
    "apersonemail{at}gmail{dot}com",
  ];

  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateBitcoinCashAddress(address, "mainnet")).toBe(true);
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateBitcoinCashAddress(address, "mainnet")).toBe(false);
    }
  );
});

describe("Bitcoin Cash Testnet Address Validation", () => {
  const validAddresses = [
    "bchtest:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
    "bchreg:qq7v0g58vdwx9enexl9qymxwlu5jy48pjsa4fu3d4w",
    "qqwj7gnylkerx7cgsvma03f0e7t3k24g8gvvyyk82r",
    "qp028nlln35nwnv5a9dssw9w57z5n765rgenr3suw6",
    "qz9qnd8e6c3f379wtr9fgjuks4493nresvj95f82sy",
    "ppwtyt2ws8f76sve85ghc9es3f54s623nyr4v98wjv",
    "pzkst4xhr5gamvgpzvyh44x80275rmglyvpzgln0a2",
    "ppawqn2h74a4t50phuza84kdp3794pq3ccvm92p8sh",
  ];
  const invalidAddresses = [
    "bcetest:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a", // missspelled CashAddr prefix
    "bcheg:qq7v0g58vdwx9enexl9qymxwlu5jy48pjsa4fu3d4w", // missspelled CashAddr prefix
    "aqwj7gnylkerx7cgsvma03f0e7t3k24g8gvvyyk82r", // invalid prefix
    "qp02$nlln35nwnv5a9dssw9w57z5n765rgenr3suw6", // has special characters
    "qz9qnd8e6c3f379wtr9fgjuks4493nresvj95f82sy#", // has special characters and too long
    "ppwtyt2ws8f76sve85ghc9es3f54s623nyr4v98wjvasdf", // too long
    "pzkst4xhr5gamvgpzvyh44x80275rmglyvpzgln0", // too short
  ];

  test.each(validAddresses)("should match valid address: %s", (address) => {
    expect(validateBitcoinCashAddress(address, "testnet")).toBeTruthy();
  });

  test.each(invalidAddresses)(
    "should not match invalid address: %s",
    (address) => {
      expect(validateBitcoinCashAddress(address, "testnet")).toBeFalsy();
    }
  );
});
