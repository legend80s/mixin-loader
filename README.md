# mixin-loader
[![npm version](https://badge.fury.io/js/mixin-loader.svg)](https://badge.fury.io/js/mixin-loader)

A Webpack loader that prepends [compass-mixins](https://github.com/Igosuki/compass-mixins) import directives to scss files.
This loader acts as a [Webpack preLoader](http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders) and usually works with [sass-loader](https://github.com/jtangelder/sass-loader).

## Installation
`npm install mixin-loader --save-dev`

## Demo
[mixin-loader demo](https://github.com/legend80s/mixin-loader-demo)

## Why yet Another Loader?
When you require third-party scss, you may come across the problem below:

> modulesModuleBuildError: Module build failed:
>
> @include border-radius(1px, 1px);
>
>    ^
>  No mixin named border-radius

The build error tells that the required file needs a mixin import directive (`@import "border-radius";`) to be prepended, but you cannot modify the third-party file.

To solve this, I create this loader to prepend compass mixins to the target files before processed by sass-loader.

## How it works
This loader prepends either `@import "compass";` or `@import "~compass-mixins/lib/compass";` to your scss file.

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
  module: {
    preLoaders: [
      {
        test: /third-party\.scss$/, // target scss
        loader: 'mixin-loader',
      },
    ],
    loaders: [
      {
        test: /\.scss$/, // sent to sass-loader
        loaders: ["style", "css", "sass"]
      }
    ]
  }
  sassLoader: {
    // `includePaths` is optional
    includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')],
  },
};

```

Result after preLoaders:

```css
@import "compass";
.btn {
  @include border-radius(1px, 1px);
}
```

If you don't have `includePaths` configured, the result will be:
```css
@import "~compass-mixins/lib/compass";
.btn {
  @include border-radius(1px, 1px);
}
```

## FAQ
1. Make sure you have **compass-mixins** installed. If not try `npm install compass-mixins --save-dev`.
    > Module build failed:
    >
    > .btn {
    >
    > ^
    >
    >    File to import not found or unreadable: ~compass-mixins/lib/compass

2. If your have `includePaths` configured, make sure it's configured properly.
    > Module build failed:
    >
    > .btn {
    >
    > ^
    >
    >    File to import not found or unreadable: compass
