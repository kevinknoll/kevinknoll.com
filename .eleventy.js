module.exports = function(eleventyConfig) {
  // copy the following files
  eleventyConfig.addPassthroughCopy("web/sw.js");
  eleventyConfig.addPassthroughCopy("web/css");
  eleventyConfig.addPassthroughCopy("web/js");
  eleventyConfig.addPassthroughCopy("web/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("web/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("web/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("web/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("web/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("web/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("web/favicon.ico");
  eleventyConfig.addPassthroughCopy("web/mstile-150x150.png");
  eleventyConfig.addPassthroughCopy("web/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("web/site.webmanifest");

  // takes a 'format' parameter that mimics moment.js
  // see https://momentjs.com/docs/#/displaying/
  eleventyConfig.addFilter('dt', function(dt, format) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

    return format
      .replace('YYYY', dt.getUTCFullYear())
      .replace('MMMM', months[dt.getUTCMonth()])
      .replace('MM', ('0' + (dt.getUTCMonth() + 1)).slice(-2))
      .replace('DD', ('0' + dt.getUTCDate()).slice(-2))
      .replace('HH', ('0' + dt.getUTCHours()).slice(-2))
      .replace('mm', ('0' + dt.getUTCMinutes()).slice(-2))
      .replace('ss', ('0' + dt.getUTCSeconds()).slice(-2))
  });

  return {
    passthroughFileCopy: true
  };
};
