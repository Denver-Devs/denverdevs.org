const removeImports = require("next-remove-imports")({});

module.exports = removeImports({
  reactStrictMode: true,
  images: {
    domains: ["tjkozhkscieinulujbed.supabase.co"],
  },
});
