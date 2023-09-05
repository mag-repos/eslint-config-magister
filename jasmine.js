module.exports = {
  rules: {
    // ESLint rules
    "max-classes-per-file": [
      "error",
      {
        ignoreExpressions: true,
        max: 20,
      },
    ],
    "max-lines-per-function": "off",
    "max-lines": ["warn", 800],
    "max-len": ["warn", 800],

    // TypeScript rules
    "@typescript-eslint/no-extraneous-class": [
      "warn",
      {
        allowEmpty: true,
        allowConstructorOnly: true,
      },
    ],
    "@typescript-eslint/unbound-method": "off",

    // Jasmine rules
    "jasmine/expect-matcher": "warn",
    "jasmine/expect-single-argument": "warn",
    "jasmine/missing-expect": "warn",
    "jasmine/named-spy": "warn",
    "jasmine/new-line-before-expect": "warn",
    "jasmine/new-line-between-declarations": "warn",
    "jasmine/no-assign-spyon": "warn",
    "jasmine/no-describe-variables": "warn",
    "jasmine/no-disabled-tests": "warn",
    "jasmine/no-expect-in-setup-teardown": "warn",
    "jasmine/no-focused-tests": "error",
    "jasmine/no-global-setup": "error",
    "jasmine/no-pending-tests": "warn",
    "jasmine/no-promise-without-done-fail": "warn",
    "jasmine/no-spec-dupes": "warn",
    "jasmine/no-suite-callback-args": "error",
    "jasmine/no-suite-dupes": "warn",
    "jasmine/no-unsafe-spy": "warn",
    "jasmine/prefer-jasmine-matcher": "warn",
    "jasmine/prefer-toHaveBeenCalledWith": "warn",
    //"jasmine/prefer-toBeUndefined": "warn"
  },
};
