module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.addWatchTarget('./src/assets/styles.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
