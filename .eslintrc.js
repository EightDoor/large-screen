module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "max-len": "off",
    "no-undef": "off",
    "vue/no-multiple-template-root": "off",
  },
};
