import { Config } from "jest";

const jestConfig: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

export default jestConfig;
