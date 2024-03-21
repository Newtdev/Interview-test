const path = require("path");

module.exports = (env, options) => ({
  resolve: {
    alias: {
      client: path.resolve(__dirname, "client/"), // added this
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
});
