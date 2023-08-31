module.exports = {
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-tslint-comment": "warn",
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          Object: {
            message: "Use {} instead.",
          },
          String: null,
          Array: null,
          Number: null,
        },
      },
    ],
    "@typescript-eslint/class-literal-property-style": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "no-type-imports" },
    ],
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "explicit",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: {
          memberTypes: [
            "public-static-field",
            "private-static-field",
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",
            "protected-static-field",
            "public-instance-field",
            "public-abstract-field",
            "protected-instance-field",
            "protected-abstract-field",
            "private-instance-field",
            "static-field",
            "public-field",
            "instance-field",
            "protected-field",
            "private-field",
            "abstract-field",
            "public-constructor",
            "protected-constructor",
            "private-constructor",
            "constructor",
          ],
        },
      },
    ],
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: ["function"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },

      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "typeProperty",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "objectLiteralProperty",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": [
      "warn",
      {
        allowWithDecorator: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "warn",
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-type-alias": [
      "warn",
      {
        allowAliases: "always",
        allowCallbacks: "always",
        allowConditionalTypes: "always",
        allowConstructors: "always",
        allowLiterals: "in-unions-and-intersections",
        allowMappedTypes: "always",
        allowTupleTypes: "always",
        allowGenerics: "always",
      },
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": [
      "warn",
      { ignoreStringArrays: true },
    ],
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/triple-slash-reference": [
      "warn",
      {
        path: "never",
        types: "never",
        lib: "never",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/typedef": "warn",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: true,
      },
    ],
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/sort-type-constituents": "warn",

    // ESLint rules
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "warn",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
    ],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
      "warn",
      "all",
      {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      },
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "warn",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "warn",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "warn",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "warn",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    "no-return-await": "off",
    "@typescript-eslint/return-await": "warn",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "warn",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "warn",
      {
        hoist: "all",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "warn",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "warn",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "warn",
    indent: "off",
    "@typescript-eslint/indent": [
      "warn",
      4,
      {
        SwitchCase: 1,
        ArrayExpression: 1,
      },
    ],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "warn",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "warn",
    quotes: "off",
    "@typescript-eslint/quotes": ["warn", "double"],
    semi: "off",
    "@typescript-eslint/semi": ["warn", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "warn",
    "no-duplicate-imports": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["warn", "always"],
  },
};
