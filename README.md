# mixin-loader
[![npm version](https://badge.fury.io/js/mixin-loader.svg)](https://badge.fury.io/js/mixin-loader)

A Webpack loader that prepends [compass-mixins](https://github.com/Igosuki/compass-mixins) import directives to scss files.
This loader acts as a [Webpack preLoader](http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders) and usually works with [sass-loader](https://github.com/jtangelder/sass-loader).

***You should check whether [sass-resources-loader](https://www.npmjs.com/package/sass-resources-loader) meets you requirements or not before using this loader.***

## Installation
`npm install mixin-loader --save-dev`

## Why yet Another Loader?
When you require third-party scss, you may come across the problem blow

> modulesModuleBuildError: Module build failed:
>
> @include border-radius(1px, 1px);
>
>    ^
>  No mixin named border-radius

The build error tells that the required file needs a mixin import directive (`@import "border-radius";`) be prepended, but you cannot modify the third-party file.

To solve this problem, I create this loader to prepend any compass mixins you want to the scss file before processed by sass-loader

## Usage

Source file:

```css
.btn {
  @include border-radius(1px, 1px);
}
```

Webpack config:

```javascript
module.exports = {
  ...
  module: {
    preLoaders: [
      {
        test: /third-party\.scss$/, // target scss
        loader: 'mixin-loader?mixins[]=border-radius,mixins[]=flexbox', // add two mixins: border-radius and flexbox
      },
    ],

    loaders: [
      {
        test: /\.scss$/, // sent to sass-loader
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

```

Result after preLoaders:

```css
@import "~compass-mixins/lib/compass/css3/border-radius";
@import "~compass-mixins/lib/compass/css3/flexbox";
.btn {
  @include border-radius(1px, 1px);
}
```

## FAQ
1. **File to import not found or unreadable**.
  > Module build failed:
  >
  > .btn {
  >
  > ^
  >
  >    File to import not found or unreadable: ~compass-mixins/lib/compass/css3/border-radius

  Make sure you have compass-mixins installed. Try `npm install compass-mixins --save-dev`.
