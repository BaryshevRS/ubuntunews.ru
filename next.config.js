module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/posts/pre-rendering',
        permanent: true,
      },
    ]
  },
}
