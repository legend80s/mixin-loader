const { getLoaderConfig } = require('loader-utils');

module.exports = function addMixin(source) {
  this.cacheable();

  const hasIncludePath = !!getLoaderConfig(this, 'sassLoader').includePaths;
  const compass = hasIncludePath ? '@import "compass";' : '@import "~compass-mixins/lib/compass";';

  const result = `${compass}\n${source}`;

  return result;
};
