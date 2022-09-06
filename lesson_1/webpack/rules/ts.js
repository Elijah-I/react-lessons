export const ts = {
  rules: [
    {
      test: /\.ts(x?)$/i,
      exclude: /node_modules/,
      use: ["ts-loader", "source-map-loader"]
    }
  ]
}
