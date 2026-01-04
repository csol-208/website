module.exports = function (eleventyConfig) {
    // Copy assets from root (not in src/)
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    eleventyConfig.addPassthroughCopy({ "images": "images" });

    // Copy markdown files from src to root of output
    eleventyConfig.addPassthroughCopy("src/*.md");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["html", "md", "njk"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
