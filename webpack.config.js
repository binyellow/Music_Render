const path = require("path");
module.exports = {
  entry: {
    app: "./entry.js",
    // vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015"]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      }
    ]
  }
};
