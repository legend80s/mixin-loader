# mixin-loader
A Webpack loader that adds [compass-mixins](https://github.com/Igosuki/compass-mixins) import directives into scss files.
This loader act as a [preLoader](http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders) and usually worked with [sass-loader](https://github.com/jtangelder/sass-loader).

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

To solve this problem, I create this loader to prepend any compass mixins you named to the scss file before processed by sass-loader

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
