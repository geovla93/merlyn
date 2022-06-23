/** @type {import('prettier').RequiredOptions} */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  plugin: [require("prettier-plugin-tailwindcss")],
};
