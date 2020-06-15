const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");

const mode = process.env.NODE_ENV || "production";

const publicPath = "http://localhost:3010/";
const remoteHosts = ["http://localhost:3011", "http://localhost:3012"];

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath,
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "application_shell_remote",
      library: { type: "var", name: "application_shell_remote" },
      filename: "app-shell.js", // expose it as `remoteEntry.js`
      // exposes: {
      //   "./SayHelloFromA": "./src/app", // This will be make the application-a available as remote
      // },
      remotes: {
        application_a: "application_a", // loads application-b as remote
        application_b: "application_b", // loads application-b as remote
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    // load the other apps entry
    new HtmlWebpackTagsPlugin({
      tags: remoteHosts.map((remoteHost) => `${remoteHost}/remoteEntry.js`),
      append: false, // prepend this as needs to be loaded before application_a
      publicPath: false,
    }),
  ],
};
