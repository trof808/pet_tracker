import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Общие правила
      "no-console": "error",
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: "error",
      "no-implicit-coercion": "error",
      "no-eval": "error",
      "no-alert": "error",
      "no-invalid-this": "error",

      // TypeScript
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",

      // React
      "react/jsx-pascal-case": "error",
      "react/no-unused-prop-types": "error",
      "react/no-array-index-key": "error",
      "react/no-danger": "error",
      "react/self-closing-comp": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // JSX
      "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
      "react/jsx-curly-spacing": ["error", "always"],
      "react/no-children-prop": "error",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
