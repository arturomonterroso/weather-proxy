import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // Turns off rules that conflict with Prettier
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // No 'any' allowed!
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"]
    }
  }
);