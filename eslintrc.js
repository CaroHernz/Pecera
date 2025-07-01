const config = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  globals: {
    window: true,
    module: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsx: true,
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
  },
};

export default config;
