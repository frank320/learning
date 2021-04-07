

### eslint配置文件
```
 // const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    // Set each global variable name equal to true to allow the variable to be
    // overwritten or false to disallow overwriting.
    _API_ENV_: true,
    _DOUYU_: true,
    location: true
  },
  plugins: [
    // https://github.com/yannickcr/eslint-plugin-react
    "react",
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    "jsx-a11y",
    "@typescript-eslint",
    "prettier"
  ],
  /*   settings: {
    "import/resolver": {
      [path.resolve("src")]: { someConfig: value },
    },
  }, */

  // "off" or 0 - turn the rule off "warn" or 1 - turn the rule on as a warning
  // (doesn’t affect exit code) "error" or 2 - turn the rule on as an error (exit
  // code is 1 when triggered)
  rules: {
    "prettier/prettier": "error",//为0时 编辑器不提示错误 也不自动修复
    "key-spacing": [
      "off",
      {
        beforeColon: false
      }
    ],
    "quotes": 0,
    "no-bitwise": 0,
    "array-callback-return": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "spaced-comment": 0,
    "comma-dangle": 0,
    "linebreak-style": ["off"],
    "object-curly-spacing": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "prefer-template": 0,
    "prefer-destructuring": 0,
    "class-methods-use-this": 0,
    "require-yield": 0,
    "consistent-return": 0,
    "func-names": 0,
    "no-empty": [
      "off",
      {
        allowEmptyCatch: true
      }
    ],
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/alt-text": 0,
    "react/no-multi-comp": 0,
    "object-shorthand": 0,
    "operator-assignment": 0,
    "no-continue": 0,

    "import/imports-first": 0,
    "import/newline-after-import": 2,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-webpack-loader-syntax": 0,

    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/eslint-plugin-jsx-a11y": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,

    "no-multi-spaces": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-script-url": 0,
    "no-use-before-define": 0,
    "no-nested-ternary": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "no-underscore-dangle": ["error", { allow: ["__ct", "__token"] }], //pc客户端全局变量忽略
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/prop-types": 0,
    "react/no-string-refs": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-array-index-key": 0,
    "react/no-did-update-set-state": 0,
    "react/no-unused-state": 0,
    yoda: 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "camelcase": 0,
    "no-return-assign": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "no-shadow": 0,
    "import/first": 0
  }
};

  
```
### 需要安装得npm包
```
 "@typescript-eslint/eslint-plugin": "^4.18.0",
 "@typescript-eslint/parser": "^4.18.0",
 "prettier": "^1.16.4",
 "prettier-eslint": "^6.4.2",
  "eslint": "^7.22.0",
  "eslint-config-airbnb": "^16.1.0",
  "eslint-config-prettier": "^2.3.0",
  "eslint-plugin-import": "^2.9.0",
  "eslint-plugin-jsx-a11y": "^6.0.3",
  "eslint-plugin-prettier": "^2.1.2",
  "eslint-plugin-react": "^7.11.1",
   "typescript": "^4.2.3",
   
   "lint-staged": "^10.5.4",
```
### package.json配置
```
  "scripts": { "lint": "lint-staged" }
  "pre-commit": "lint",
  "lint-staged": {
    "src/**/*.{js,ts,tsx,react}": [
      "eslint --color"
    ]
  },
```
