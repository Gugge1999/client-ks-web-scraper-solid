import js from "@eslint/js";
import eslintPlugin from "eslint-plugin-solid/configs/recommended";
import solid from "eslint-plugin-solid/configs/typescript";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  tseslint.configs.eslintRecommended,
  eslintPlugin,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
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
      "no-nested-ternary": "error",
      "no-else-return": "error",
    },
  },
);
