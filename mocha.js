module.exports = {
  rules: {
    // ESLint rules
    "no-unused-expressions": "off",
    "max-lines-per-function": "off",
    "max-statements": ["warn", 50],
    "max-lines": ["warn", 1000],
    "prefer-arrow/prefer-arrow-functions": "off",
    "mocha/prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // Mocha rules
    "mocha/consistent-spacing-between-blocks": "warn",
    "mocha/handle-done-callback": ["warn", { ignoreSkipped: false }],
    "mocha/max-top-level-suites": ["warn", { limit: 2 }],
    "mocha/no-async-describe": ["warn"],
    "mocha/no-empty-description": "warn",
    "mocha/no-exclusive-tests": ["warn"],
    "mocha/no-exports": "warn",
    "mocha/no-global-tests": ["warn"],
    "mocha/no-hooks": ["off"],
    "mocha/no-hooks-for-single-case": ["warn"],
    "mocha/no-identical-title": ["error"],
    "mocha/no-mocha-arrows": ["warn"],
    "mocha/no-nested-tests": ["warn"],
    "mocha/no-pending-tests": ["warn"],
    "mocha/no-return-and-callback": ["warn"],
    "mocha/no-return-from-async": ["off"],
    "mocha/no-setup-in-describe": ["warn"],
    "mocha/no-sibling-hooks": ["warn"],
    "mocha/no-skipped-tests": ["warn"],
    "mocha/no-synchronous-tests": ["off", { allowed: ["async"] }],
    "mocha/no-top-level-hooks": ["warn"],
    "mocha/valid-suite-description": ["warn", "^[A-Z]"],
    "mocha/valid-test-description": ["warn"],
  },
};
