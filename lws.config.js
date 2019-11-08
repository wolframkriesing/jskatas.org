const devConfig = {
  rewrite: [
    // URLs
    { from: "/", "to": "/sites/index.html" },
    { from: "/katas/(.*)", "to": "/sites/katas/$1" },
  ]
};
module.exports = process.env.NODE_ENV === 'production' ? {} : devConfig;
