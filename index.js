/* eslint-disable no-console */

const { parseQuery } = require('loader-utils');
const MIXINS = require('./mixins');

/**
 * return mixin by its name
 * for example: 'border-radius' -> '@import "~compass-mixins/lib/compass/css3/border-radius";'
 *
 * @param  {string} mixin name
 * @return {string} mixin content
 */
function getMixinByName(name) {
  const mixin = MIXINS[name];

  if (typeof mixin === 'undefined') {
    console.warn(`\n[mixin-loader] WARNING: No mixin named \`${name}\`, ignored.`);
  }

  return mixin || '';
}

module.exports = function addMixin(source) {
  this.cacheable();

  const { mixins } = parseQuery(this.query);

  if (!mixins || !Array.isArray(mixins)) {
    return source;
  }

  // console.log('\n*** [mixin-loader] begin ****');
  // console.log('[mixin-loader] mixins:', mixins);

  const imports = mixins.map(getMixinByName).filter(m => m !== '').join('\n');
  const result = imports ? `${imports}\n${source}` : source;

  // console.log('[mixin-loader] result:\n', result);
  // console.log('*** [mixin-loader] end ****\n');

  return result;
};
