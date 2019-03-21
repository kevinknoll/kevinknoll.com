module.exports = function(eleventyConfig) {
  // copy the following files
  eleventyConfig.addPassthroughCopy("web/sw.js");
  eleventyConfig.addPassthroughCopy("web/css");

  return {
    passthroughFileCopy: true
  };
};
