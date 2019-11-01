const devConfig = {
  rewrite: [
    // URLs
    { from: "/", "to": "/katas/" },
    { from: "/katas/(.*)/", "to": "/src/$1.html" },

    // assets
    { from: "/katas/overview/(.*)", "to": "/src/$1" },
    { from: "/katas/bundles/(.*)", "to": "/src/$1" },
    { from: "/node_modules/(.*)", "to": "/node_modules/$1" },
  ]
};
module.exports = process.env.NODE_ENV === 'production' ? {} : devConfig;
