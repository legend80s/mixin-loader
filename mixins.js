/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable comma-dangle */

const css3Path = 'compass/css3';

const mixins = {
  css3: `@import "${css3Path}";`,

  "animation": `@import "${css3Path}/animation";`,
  "appearance": `@import "${css3Path}/appearance";`,
  "background-clip": `@import "${css3Path}/background-clip";`,
  "background-origin": `@import "${css3Path}/background-origin";`,
  "background-size": `@import "${css3Path}/background-size";`,
  "border-radius": `@import "${css3Path}/border-radius";`,
  "box-shadow": `@import "${css3Path}/box-shadow";`,
  "box-sizing": `@import "${css3Path}/box-sizing";`,
  "box": `@import "${css3Path}/box";`,
  "columns": `@import "${css3Path}/columns";`,
  "filter": `@import "${css3Path}/filter";`,
  "flexbox": `@import "${css3Path}/flexbox";`,
  "font-face": `@import "${css3Path}/font-face";`,
  "hyphenation": `@import "${css3Path}/hyphenation";`,
  "images": `@import "${css3Path}/images";`,
  "inline-block": `@import "${css3Path}/inline-block";`,
  "opacity": `@import "${css3Path}/opacity";`,
  "pie": `@import "${css3Path}/pie";`,
  "regions": `@import "${css3Path}/regions";`,
  "shared": `@import "${css3Path}/shared";`,
  "text-shadow": `@import "${css3Path}/text-shadow";`,
  "transform-legacy": `@import "${css3Path}/transform-legacy";`,
  "transform": `@import "${css3Path}/transform";`,
  "transition": `@import "${css3Path}/transition";`,
  "user-interface": `@import "${css3Path}/user-interface";`
};

module.exports = mixins;
