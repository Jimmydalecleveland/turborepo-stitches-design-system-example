const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    // This project uses default exports as the primary convention, unless a file
    // has multiple exports, or is a file type that consistently exports multiple things.
    // (e.g. `.styles.ts` files, or `index.ts` files. See overrides below.)
    "import/no-default-export": "off",

    // I still prefer to UpperCamelCase React components.
    "unicorn/filename-case": "off",

    // This is a bit too ridiculous for me. Sometimes props are more readable in custom orders,
    // such ass className being at the top or bottom when it is very long.
    "react/jsx-sort-props": "off",

    // expect all components to be arrow functions for consistency
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    // Whether one or multiple styles are exported, we want to import consistently.
    // Also, `index.ts` files commonly re-export default exports for easier finding
    // of files (e.g. `Button.tsx`, and `Text.tsx` over `index.tsx` for both).
    {
      files: ["*.styles.ts", "index.ts"],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
    {
      files: ["*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      }
    }
  ],
};
