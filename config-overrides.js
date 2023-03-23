const {
  override,
  overrideDevServer,
  addWebpackPlugin,
} = require("customize-cra");
const CopyPlugin = require("copy-webpack-plugin");
const RewireMultipleEntry = require("react-app-rewire-multiple-entry");

const multipleEntry = RewireMultipleEntry([
  {
    entry: "src/popup/index.tsx",
    template: "public/popup.html",
    outPath: "/popup.html",
  },
  // {
  //   entry: "src/page/index.tsx",
  //   template: "public/index.html",
  //   outPath: "/index_1.html",
  // },
]);

const devServerConfig = () => (config) => {
  return {
    ...config,
    devMiddleware: {
      writeToDisk: true,
    }
  };
};

const copyPlugin = new CopyPlugin({
  patterns: [
    // { from: "public", to: "" },
    { from: "src/script/background.js", to: "" },
    { from: "src/script.js", to: "" },
    { from: "src/script/getDom.js", to: "" },
    // { from: "src/script/pressButton.js", to: "" },
    // { from: "src/script/getCount.js", to: "" },
  ],
});

module.exports = {
  webpack: override(addWebpackPlugin(copyPlugin), multipleEntry.addMultiEntry),
  devServer: overrideDevServer(devServerConfig()),
};


