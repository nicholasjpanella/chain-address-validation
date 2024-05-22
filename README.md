[![Npm package version](https://badgen.net/npm/v/chain-address-validation)](https://npmjs.com/package/chain-address-validation)
[![Test Build & Publish](https://github.com/nicholasjpanella/chain-address-validation/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/nicholasjpanella/chain-address-validation/actions/workflows/npm-publish.yml)
[![GitHub latest commit](https://badgen.net/github/last-commit/nicholasjpanella/chain-address-validation)](https://GitHub.com/nicholasjpanella/chain-address-validation/commit/)
[![Npm package yearly downloads](https://badgen.net/npm/dy/chain-address-validation)](https://npmjs.com/package/chain-address-validation)

# chain-address-validation

A TypeScript library for validating various cryptocurrency addresses.

## Installation

You can install this package using npm or yarn:

```bash
npm install chain-address-validation
```

or

```bash
yarn add chain-address-validation
```

## Usage

To use this library, import the desired validation function and call it with the address you want to validate.

Here's an example of how to validate Bitcoin addresses:

```typescript
import { validateBitcoinAddress } from "chain-address-validation";

const address = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";

if (validateBitcoinAddress(address)) {
  console.log("Valid Bitcoin address");
} else {
  console.log("Invalid Bitcoin address");
}
```

This library currently supports the following cryptocurrencies:

- Chain Agnositic - validates the formatting of any of the supported chains

```typescript
import { validateAddress } from "chain-address-validation";
```

- Bitcoin (BTC)

```typescript
import { validateBitcoinAddress } from "chain-address-validation";
```

- Ethereum (ETH)

```typescript
import { validateEthereumAddress } from "chain-address-validation";
```

- Litecoin (LTC)

```typescript
import { validateLitecoinAddress } from "chain-address-validation";
```

- Bitcoin Cash (BCH)

```typescript
import { validateBitcoinCashAddress } from "chain-address-validation";
```

- Dash (DASH)

```typescript
import { validateDashAddress } from "chain-address-validation";
```

- Dogecoin (DOGE)

```typescript
import { validateDogeAddress } from "chain-address-validation";
```

- Solana (SOL)

```typescript
import { validateSolanaAddress } from "chain-address-validation";
```

- Cardano (ADA)

```typescript
import { validateCardanoAddress } from "chain-address-validation";
```

You can import and use the respective validation functions for each of these cryptocurrencies.

# Testnet Support

Each respective validation function offers a secondary argument for "networkType."
Options include

- "\*" (default)
- "mainnet"
- "testnet"

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the GNU General Public License. See the [LICENSE](https://github.com/your-username/chain-address-validation/blob/main/LICENSE) file for more details.

## Disclaimer

This library is provided as-is and without any warranty. Use it at your own risk. Always double-check the validity of addresses before transferring funds.

It is in no way validating the existance of an address, only the formatting is being validated here.
