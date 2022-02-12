const path = require("path");

module.exports = {
  mode: "production",
  entry: "./reset.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "reset.js",
    library: "resetCSS",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            sassOptions: {
              outputStyle: "compressed",
            },
          },
        },
        ],
      },
    ],
  },
};
