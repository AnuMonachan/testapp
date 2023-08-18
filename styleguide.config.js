module.exports = {
  // components: "src/components/**/[A-Z]*.jsx",
  components: ["src/examples/[A-Z]*.jsx","src/components/**/[A-Z]*.jsx","src/hooks/**.js"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
};
