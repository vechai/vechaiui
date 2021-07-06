const fs = require("fs");
const postcss = require("postcss");
const tailwind = require("tailwindcss");
const CleanCSS = require("clean-css");

function buildDistFile(filename) {
  // FIXME: basic mode seems buggy when compiling plugins
  // return postcss([
  //   require("postcss-import"),
  //   tailwind({
  //     darkMode: "class",
  //     corePlugins: {
  //       container: false,
  //     },
  //     plugins: [require("../src/index.js")],
  //   }),
  //   require("autoprefixer"),
  // ])
  //   .process("@tailwind components;",
  //     {
  //       from: null,
  //       to: `./dist/${filename}.css`,
  //       map: false,
  //     }
  //   )
  //   .then((result) => {
  //     fs.writeFileSync(`./dist/${filename}.css`, result.css);
  //     return result;
  //   })
  //   .then((result) => {
  //     const minified = new CleanCSS().minify(result.css);
  //     fs.writeFileSync(`./dist/${filename}.min.css`, minified.styles);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return Promise.resolve();
}

console.info("Building CSS...");

Promise.all([buildDistFile("vechaiui")]).then(() => {
  console.log("Finished building CSS.");
});
