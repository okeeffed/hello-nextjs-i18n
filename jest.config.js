module.exports = {
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  // @see https://jestjs.io/docs/configuration#collectcoverage-boolea
  // @see https://huafu.github.io/ts-jest/user/config/#paths-mapping
  moduleNameMapper: {
    // Ignore scss modules, etc.
    // Note: The order here matters for mocking.
    "^components/(.*)$": "<rootDir>/components/$1",
  },
};
