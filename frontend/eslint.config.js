import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: "error",        // exempelregel: kräver semikolon
      quotes: ["error", "double"] // exempelregel: kräver dubbelfnuttar
    }
  }
];
