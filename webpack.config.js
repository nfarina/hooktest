const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PROJECT_DIR = path.resolve(__dirname);
const PUBLIC_DIR = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: `${PROJECT_DIR}/src/main`,
  output: { path: PUBLIC_DIR },
  module: { rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/react'],
            ['@babel/env', {
              targets: { "browsers": "last 2 chrome versions" },
              modules: false,
            }],          
          ],
          plugins: [
            'react-hot-loader/babel',
          ]
        }
      }
    },
  ] },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hooks Reset Test",
      template: `${PROJECT_DIR}/index.ejs`,
    }),
  ],
  devServer: {
    port: "9999",
    contentBase: PUBLIC_DIR,
  },
  resolve: {
    alias: {
      // Special version of react-dom that supports hot-loader:
      // https://github.com/hot-loader/react-dom
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
