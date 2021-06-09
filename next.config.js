module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config

    return config
  },
  env: {
    BASE_URL: 'http://localhost:3000'
  }
}
