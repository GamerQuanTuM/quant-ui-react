// .eslintrc.js
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    plugins: ["react-hooks", "@typescript-eslint"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  