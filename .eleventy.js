module.exports = function (eleventyConfig) {
    // https://www.11ty.dev/docs/copy/#manual-passthrough-file-copy-(faster)
    eleventyConfig.addPassthroughCopy("assets/");

    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.min.js":"assets/bootstrap.min.js"})
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.min.js.map":"assets/bootstrap.min.js.map"})
    
};