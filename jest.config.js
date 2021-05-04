module.exports = {
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  // @see https://jestjs.io/docs/configuration#collectcoverage-boolea
  // @see https://huafu.github.io/ts-jest/user/config/#paths-mapping
  moduleNameMapper: {
    // Ignore scss modules, etc.
    // Note: The order here matters for mocking.
    "^components/(.*)$": "<rootDir>/components/$1",
    "^test/(.*)$": "<rootDir>/test/$1",
    "^content/(.*)$": "<rootDir>/content/$1",
  },
};
