import { resolve as _resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/main.tsx";
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
  clean: true, // Clean the output directory before emit
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/i,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets
        },
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"], // Use style-loader and css-loader
    },
  ],
};
export const resolve = {
  extensions: [".js", ".jsx", "tsx", "ts"], // Resolve .js and .jsx extensions
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html", // Template HTML file
  }),
];
export const devServer = {
  contentBase: join(__dirname, "dist"),
  compress: true,
  port: 9000,
  open: true, // Open the browser after server had been started
};
export const mode = "development";
