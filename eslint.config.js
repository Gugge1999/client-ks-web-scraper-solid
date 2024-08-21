import js from "@eslint/js";
import plugin from "eslint-plugin-solid";
import solid from "eslint-plugin-solid/configs/typescript.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  plugin.configs["flat/typescript"],
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      eqeqeq: "error",
      curly: ["error", "all"],
    },
  }
);

