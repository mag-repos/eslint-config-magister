module.exports = {
  parser: "@angular-eslint/template-parser",
  rules: {
    "@angular-eslint/template/accessibility-alt-text": "warn",
    "@angular-eslint/template/accessibility-elements-content": "warn",
    "@angular-eslint/template/accessibility-label-for": "warn",
    "@angular-eslint/template/no-positive-tabindex": "warn",
    "@angular-eslint/template/accessibility-table-scope": "warn",
    "@angular-eslint/template/accessibility-valid-aria": "warn",
    "@angular-eslint/template/banana-in-box": "warn",
    "@angular-eslint/template/click-events-have-key-events": "warn",
    "@angular-eslint/template/mouse-events-have-key-events": "warn",
    "@angular-eslint/template/no-any": "warn",
    "@angular-eslint/template/no-autofocus": "warn",
    "@angular-eslint/template/no-distracting-elements": "warn",
    "@angular-eslint/template/no-negated-async": "warn",
    "@angular-eslint/template/conditional-complexity": "warn",
    "@angular-eslint/template/cyclomatic-complexity": "warn",
    "@angular-eslint/template/i18n": [
    "warn", 
      {
        "checkId": true,
        "checkAttributes": false,
        "ignoreTags": ["mat-icon"]
      }
    ],
    "@angular-eslint/template/use-track-by-function": "warn",
    "@angular-eslint/template/no-call-expression": "warn",
  },
};
