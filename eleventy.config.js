const categories = require("./src/_data/categories.json");

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

module.exports = function (eleventyConfig) {
  // Static files copied as-is
  eleventyConfig.addPassthroughCopy({
    "src/css": "css",
    "src/js": "js",
    "src/assets": "assets",
    "src/admin": "admin",
    "src/favicon.ico": "favicon.ico",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
  });

  // "Sowing Into Communities. *Strengthening* Those Who Serve." -> gold italic emphasis
  eleventyConfig.addFilter("emph", (text) =>
    escapeHtml(text).replace(/\*([^*]+)\*/g, "<em>$1</em>")
  );

  // Put a line break before the last word ("Community Members<br>Reached")
  eleventyConfig.addFilter("breakLast", (text) => {
    const words = escapeHtml(text).trim().split(/\s+/);
    if (words.length < 2) return words.join(" ");
    const last = words.pop();
    return words.join(" ") + "<br>" + last;
  });

  // Keep line breaks typed into multi-line fields (addresses)
  eleventyConfig.addFilter("nl2br", (text) => escapeHtml(text).replace(/\r?\n/g, "<br>"));

  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  // Uploads are stored as "/assets/img/..." by the CMS; pages live at the site root
  // and use relative URLs so the site also works from a sub-path (e.g. GitHub Pages).
  eleventyConfig.addFilter("asset", (p) => (p ? String(p).replace(/^\/+/, "") : ""));

  // "Refuge of Hope" -> "RH", "Fresh Bread Ministries" -> "FB"
  eleventyConfig.addFilter("initials", (name) => {
    const words = String(name || "")
      .split(/\s+/)
      .filter((w) => /^[A-Z0-9]/.test(w));
    return (words.length ? words : String(name || "?").split(/\s+/))
      .slice(0, 2)
      .map((w) => w.charAt(0).toUpperCase())
      .join("");
  });

  eleventyConfig.addFilter("categoryLabel", (value) => {
    const found = categories.find((c) => c.value === value);
    return found ? found.label : value;
  });


  // Used as ?v= on CSS/JS so returning visitors always get fresh files after a deploy
  eleventyConfig.addGlobalData("buildStamp", () => Date.now());

  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk"],
  };
};
