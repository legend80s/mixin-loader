/* eslint-disable no-console */

const { parseQuery } = require('loader-utils');

/**
 * return mixin by its name
 * for example: 'border-radius' -> '@import "~compass-mixins/lib/compass/css3/border-radius";'
 *
 * @param  {string} mixin name
 * @return {string} mixin content
 */
function getMixinByName(name) {
  let mixin = '';

  switch (name) {
    case 'border-radius':
      mixin = '@import "~compass-mixins/lib/compass/css3/border-radius";';
      break;
    default:
      console.warn(`[mixin-loader] WARNING: No mixin found by name \`${name}\`, ignored.`);
  }

  return mixin;
}

module.exports = function addMixin(source) {
  this.cacheable();

  const { mixins } = parseQuery(this.query);

  // console.log('\n*** [mixin-loader] begin ****');
  // console.log('[mixin-loader] mixins:', mixins);

  const imports = mixins.map(getMixinByName).filter(m => m !== '').join('\n');
  const result = imports ? `${imports}\n${source}` : source;

  // console.log('[mixin-loader] result:\n', result);
  // console.log('*** [mixin-loader] end ****\n');

  return result;
};
