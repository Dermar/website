import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import vitest from "@vitest/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:@tanstack/eslint-plugin-query/recommended",
      ),
    ),

    plugins: {
      import: fixupPluginRules(_import),
      vitest,
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-non-null-assertion": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
        },
      ],

      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
        },
      ],

      complexity: ["error", 10],
      "import/no-default-export": 2,
      "import/no-duplicates": "error",
      "no-console": "error",
      "object-shorthand": ["error", "always"],

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*"],
              message: "No relative paths outside of the folder",
            },
          ],
        },
      ],

      "no-unneeded-ternary": "error",
      "prefer-arrow-callback": "warn",

      "react/forbid-elements": [
        "error",
        {
          forbid: ["b"],
        },
      ],

      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          reservedFirst: true,
          shorthandFirst: true,
        },
      ],

      "react/no-unstable-nested-components": [
        "error",
        {
          allowAsProps: true,
        },
      ],

      "react/react-in-jsx-scope": 0,
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
]);
