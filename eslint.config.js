import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  ...compat.config({
    env: {
      es2021: true,
      node: true,
    },
    extends: ["airbnb-base", "prettier", "plugin:vitest-globals/recommended"],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ["src/**/*.js"],
        parserOptions: {
          sourceType: "module",
        },
      },
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-plusplus": "off",
      "max-classes-per-file": "off",
      "no-undef": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
    },
  }),
];
