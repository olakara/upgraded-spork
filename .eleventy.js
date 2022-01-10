module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/images/");

  eleventyConfig.addWatchTarget('./src/assets/styles.css');

  return {
    templateFormats: [
      "md",
      "html",
      "liquid"
    ],
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
