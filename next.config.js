const removeImports = require("next-remove-imports")({});

module.exports = removeImports({
  reactStrictMode: true,
  target: "serverless",
});
