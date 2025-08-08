
module.exports = function(eleventyConfig) {
  // Add a unique filter for Nunjucks
  eleventyConfig.addFilter("unique", function(arr) {
    if (!Array.isArray(arr)) return arr;
    return [...new Set(arr)];
  });
  // Collection for all markdown files in root and posts/
  eleventyConfig.addCollection("allMarkdown", function(collectionApi) {
    return collectionApi.getFilteredByGlob(["*.md", "posts/*.md"]);
  });

  // Collection for all tags from markdown files
  eleventyConfig.addCollection("tags", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getFilteredByGlob(["*.md", "posts/*.md"]).forEach(item => {
      let tags = item.data.tags;
      if (Array.isArray(tags)) {
        tags.forEach(tag => tagSet.add(tag));
      } else if (typeof tags === 'string') {
        tagSet.add(tags);
      }
    });
    return Array.from(tagSet);
  });
};
