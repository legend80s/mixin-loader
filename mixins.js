/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable comma-dangle */

const path = 'compass/css3';

const mixins = {
  "animation": `@import "${path}/animation";`,
  "appearance": `@import "${path}/appearance";`,
  "background-clip": `@import "${path}/background-clip";`,
  "background-origin": `@import "${path}/background-origin";`,
  "background-size": `@import "${path}/background-size";`,
  "border-radius": `@import "${path}/border-radius";`,
  "box-shadow": `@import "${path}/box-shadow";`,
  "box-sizing": `@import "${path}/box-sizing";`,
  "box": `@import "${path}/box";`,
  "columns": `@import "${path}/columns";`,
  "filter": `@import "${path}/filter";`,
  "flexbox": `@import "${path}/flexbox";`,
  "font-face": `@import "${path}/font-face";`,
  "hyphenation": `@import "${path}/hyphenation";`,
  "images": `@import "${path}/images";`,
  "inline-block": `@import "${path}/inline-block";`,
  "opacity": `@import "${path}/opacity";`,
  "pie": `@import "${path}/pie";`,
  "regions": `@import "${path}/regions";`,
  "shared": `@import "${path}/shared";`,
  "text-shadow": `@import "${path}/text-shadow";`,
  "transform-legacy": `@import "${path}/transform-legacy";`,
  "transform": `@import "${path}/transform";`,
  "transition": `@import "${path}/transition";`,
  "user-interface": `@import "${path}/user-interface";`
};

module.exports = mixins;
