const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./main.ts",
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "vue-loader",
          options: {
            loaders: {
              ts: "ts-loader",
            },
            esModule: true,
          },
        },
      },
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".js", ".ts"],
  },
};
