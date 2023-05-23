import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
  },
  target: "node19.0",
  devtool: "source-map",
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }), // Add shebang to the top of the file
  ],
};

export default config;
