module.exports = {
  rewrite: [
    // URLs
    { from: "/", "to": "/katas/" },
    { from: "/katas/(.*)/", "to": "/src/$1.html" },

    // assets
    { from: "/katas/overview/(.*)", "to": "/src/$1" },
    { from: "/katas/node_modules/(.*)", "to": "/node_modules/$1" },
  ]
};
