/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      extends: "plugin:mdx/recommended",
      // TODO: Enable this when it works properly
      // settings: {
      //   "mdx/code-blocks": true,
      // },
    },
  ],
};
