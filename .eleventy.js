module.exports = function(eleventyConfig) {
  // Copy the `web/sw.js` file
  eleventyConfig.addPassthroughCopy("web/sw.js");

  return {
    passthroughFileCopy: true
  };
};
