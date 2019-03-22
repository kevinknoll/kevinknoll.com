module.exports = function(eleventyConfig) {
  // copy the following files
  eleventyConfig.addPassthroughCopy("web/sw.js");
  eleventyConfig.addPassthroughCopy("web/css");
  eleventyConfig.addPassthroughCopy("web/js");

  // datetime filter to format dates and times
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
