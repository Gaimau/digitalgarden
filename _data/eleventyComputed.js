module.exports = {
  eleventyComputed: {
    tags: data => {
      // If tags are defined in front matter, return them as array
      if (Array.isArray(data.tags)) return data.tags;
      if (typeof data.tags === 'string') return [data.tags];
      return [];
    },
    title: data => data.title || data.page.fileSlug
  }
};
