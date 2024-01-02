module.exports = {
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    })
    return config
  },
  images: {
    domains: ["github.com"],
    unoptimized: true
  }
}
