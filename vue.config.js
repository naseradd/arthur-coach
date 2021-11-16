module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? "/arthur-coach" : "/",
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
