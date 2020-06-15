const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");

const mode = process.env.NODE_ENV || "production";

const publicPath = "http://localhost:3012/";
const remoteHost = "http://localhost:3011";

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
      name: "application_b",
      library: { type: "var", name: "application_b" }, // Applicatiob
      filename: "remoteEntry.js",
      exposes: {
        "./SayHelloFromB": "./src/app", // This will be make the application-b available as remote
      },
      remotes: {
        application_a: "application_a", // loads application-a as remote
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    // load the other apps entry
    new HtmlWebpackTagsPlugin({
      tags: [`${remoteHost}/remoteEntry.js`],
      append: false, // prepend this as needs to be loaded before application_a
      publicPath: false,
    }),
  ],
};
