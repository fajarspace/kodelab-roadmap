module.exports = {
  // other options here
  module: {
    rules: [
      // other rules here
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
