module.exports = {
  rules: {
    "for-direction": "warn",
    "getter-return": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-console": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-dupe-args": "warn",
    "no-dupe-else-if": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "warn",
    "no-func-assign": "warn",
    "no-import-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-obj-calls": "warn",
    "no-regex-spaces": "warn",
    "no-sparse-arrays": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "use-isnan": "warn",
    "valid-typeof": "warn",
    "no-case-declarations": "warn",
    "no-empty-pattern": "warn",
    "no-fallthrough": "warn",
    "no-global-assign": "warn",
    "no-octal": "warn",
    "no-redeclare": "warn",
    "no-self-assign": "warn",
    "no-setter-return": "warn",
    "no-unused-labels": "warn",
    "no-useless-escape": "warn",
    "no-delete-var": "warn",
    "no-undef": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" }],
    "no-mixed-spaces-and-tabs": "warn",
    "constructor-super": "warn",
    "no-class-assign": "warn",
    "no-const-assign": "warn",
    "no-dupe-class-members": "warn",
    "no-new-symbol": "warn",
    "no-this-before-super": "warn",
    "require-yield": "warn",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-extra-parens": [
      "warn",
      "all",
      {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      },
    ],
    "no-misleading-character-class": "warn",
    "no-prototype-builtins": "warn",
    "no-template-curly-in-string": "warn",
    "require-atomic-updates": "warn",
    "accessor-pairs": "warn",
    "array-callback-return": "warn",
    "block-scoped-var": "warn",
    "class-methods-use-this": "warn",
    complexity: "warn",
    "consistent-return": "warn",
    curly: ["warn", "all"],
    "default-case": "warn",
    "default-case-last": "warn",
    "default-param-last": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    eqeqeq: "warn",
    "guard-for-in": "warn",
    "max-classes-per-file": "warn",
    "no-alert": "warn",
    "no-caller": "warn",
    "no-div-regex": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-eq-null": "warn",
    "no-eval": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",
    "no-invalid-this": "warn",
    "no-iterator": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-loss-of-precision": "warn",
    "no-magic-numbers": [
      "warn",
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: true,
      },
    ],
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-wrappers": "warn",
    "no-octal-escape": "warn",
    "no-param-reassign": "warn",
    "no-proto": "warn",
    "no-restricted-properties": "warn",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-script-url": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-throw-literal": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unused-expressions": "warn",
    "no-useless-backreference": "warn",
    "no-useless-call": "warn",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-useless-return": "warn",
    "no-void": ["warn", { allowAsStatement: true }],
    "no-warning-comments": "warn",
    "no-with": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "warn",
    "prefer-promise-reject-errors": "warn",
    "prefer-regex-literals": "warn",
    radix: "warn",
    "require-await": "warn",
    "require-unicode-regexp": "warn",
    "vars-on-top": "warn",
    "wrap-iife": "warn",
    yoda: "warn",
    strict: "warn",
    "init-declarations": "off",
    "no-label-var": "warn",
    "no-restricted-globals": ["warn", "event", "fdescribe"],
    "no-restricted-exports": [
      "warn",
      {
        restrictedNamedExports: ["default"],
      },
    ],
    "no-shadow": [
      "warn",
      {
        hoist: "all",
      },
    ],
    "no-shadow-restricted-names": "warn",
    "no-undef-init": "warn",
    "no-undefined": "off",
    "no-use-before-define": "warn",
    "callback-return": "warn",
    "global-require": "warn",
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],
    "handle-callback-err": "warn",
    "no-buffer-constructor": "warn",
    "no-constructor-return": "warn",
    "no-mixed-requires": "warn",
    "no-new-require": "warn",
    "no-path-concat": "warn",
    "no-process-env": "warn",
    "no-process-exit": "warn",
    "no-restricted-modules": "warn",
    "no-sync": ["warn", { allowAtRootLevel: true }],
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": "warn",
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": "warn",
    "brace-style": "warn",
    camelcase: "warn",
    "capitalized-comments": "warn",
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "warn",
    "func-names": ["warn", "never"],
    "func-style": ["warn", "expression"],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", "consistent"],
    "id-blacklist": [
      "warn",
      "data",
      "err",
      "e",
      "cb",
      "callback",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-length": [
      "warn",
      {
        min: 2,
        max: 40,
        exceptions: ["i","j","_","x","y","z"],
      },
    ],
    "id-match": [1, "^_|_?[a-zA-Z]+\\$?$"],
    "implicit-arrow-linebreak": ["off", "beside"],
    indent: [
      "warn",
      4,
      {
        SwitchCase: 1,
        ArrayExpression: 1,
      },
    ],
    "jsx-quotes": "warn",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "warn",
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": ["warn", { allowBlockStart: true }],
    "lines-between-class-members": "warn",
    "max-depth": "warn",
    "max-len": ["warn", 120],
    "max-lines": ["warn", 400],
    "max-lines-per-function": ["warn", 50],
    "max-nested-callbacks": ["warn", 4],
    "max-params": [0, 5],
    "max-statements": ["warn", 15],
    "max-statements-per-line": "warn",
    "multiline-comment-style": "warn",
    "multiline-ternary": ["warn", "always-multiline"],
    "new-cap": [
      "warn",
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
        capIsNewExceptions: [
          "Router",
          "NgModule",
          "Component",
          "Input",
          "ViewChild",
          "Directive",
          "Injectable",
          "Inject",
          "ViewChildren",
          "HostListener",
          "HostBinding",
          "Output",
          "ContentChild",
          "ContentChildren"

        ],
      },
    ],
    "new-parens": "warn",
    "newline-per-chained-call": "warn",
    "no-array-constructor": "warn",
    "no-bitwise": "warn",
    "no-continue": "warn",
    "no-inline-comments": "warn",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-multi-assign": "warn",
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
      },
    ],
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-nonoctal-decimal-escape": "warn",
    "no-plusplus": [
      "off",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-promise-executor-return": "warn",
    "no-restricted-syntax": [
      "warn",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],
    "no-tabs": "warn",
    "no-ternary": "off",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": [
      "warn",
      {
        allow: ["_id"],
        allowAfterThis: true 
      },
    ],
    "no-unneeded-ternary": "warn",
    "no-unreachable-loop": "warn",
    "no-unsafe-optional-chaining": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": "warn",
    "object-curly-newline": [
      "warn",
      {
        multiline: true,
        minProperties: 5,
        consistent: true,
      },
    ],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": [
      "warn",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "one-var": ["warn", "never"],
    "one-var-declaration-per-line": ["warn", "always"],
    "operator-assignment": "warn",
    "operator-linebreak": [
      "warn",
      "before",
      {
        overrides: {
          "+": "after",
          "=": "after",
          "*": "after",
          "/": "after",
          "+=": "after",
          "&&": "after",
          "||": "after",
        },
      },
    ],
    "padded-blocks": ["warn", "never"],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "prefer-object-spread": "warn",
    "quote-props": "warn",
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "semi-spacing": "warn",
    "semi-style": "warn",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "warn",
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",
    "unicode-bom": "warn",
    "wrap-regex": "off",
    "arrow-body-style": [
      "warn",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "generator-star-spacing": "warn",
    "no-confusing-arrow": [
      "warn",
      {
        allowParens: true,
      },
    ],
    "no-duplicate-imports": "warn",
    "no-restricted-imports": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "object-shorthand": [
      "warn",
      "always",
      {
        avoidExplicitReturnArrows: false,
      },
    ],
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": "warn",
    "sort-imports": [
      "error",
      {
          "ignoreCase": true,
          "ignoreDeclarationSort": true,
          "allowSeparatedGroups": true
      }
  ],
    "symbol-description": "warn",
    "template-curly-spacing": "warn",
    "yield-star-spacing": "error",
  },
};
