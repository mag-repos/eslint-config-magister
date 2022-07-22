module.exports = {
  rules: {
    "import/no-default-export": "warn",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: false,
      },
    ],
    "import/order": [
      "error",
     {
         "alphabetize": {
             "caseInsensitive": true,
             "order": "asc"
         },
         "newlines-between": "always",
         "groups": [
             "builtin",
             "external",
             "internal",
             ["index", "sibling", "parent", "object"]
         ],
         "pathGroups": []
     }
 ],
    "import/no-internal-modules": [
      "warn",
      {
        allow: [
          "rxjs/*",
          "@ngrx/effects/*",
          "@angular/common/*",
          "@angular/platform-browser/*",
          "@angular/platform-browser-dynamic/*",
          "@angular/core/*",
          "@angular/material/*",
          "@angular/material/icon/*",
          "@angular/cdk/*",
          "@angular/router/*",
        ],
      },
    ],
  },
};
