// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true },
  node: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
  },
};
