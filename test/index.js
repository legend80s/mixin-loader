/* global describe it */

const { expect } = require('chai');
const mixinLoader = require('../index');

const context = {
  cacheable() {
    // EMPTY
  },
};
const options = { sassLoader: { includePaths: [] } };

const source = `
.btn {
    @include border-radius(1px, 1px);
  }
`;

describe('mixin-loader', () => {
  it('should work when there is includePaths and query is not empty', () => {
    const query = '?mixins[]=border-radius';
    const result = mixinLoader.call(Object.assign({ query, options }, context), source);
    const expected = `@import "compass";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should work when there is includePaths and query empty', () => {
    const query = '';
    const result = mixinLoader.call(Object.assign({ query, options }, context), source);
    const expected = `@import "compass";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should work when there is no sassLoader', () => {
    const result = mixinLoader.call(Object.assign({ options: {} }, context), source);
    const expected = `@import "~compass-mixins/lib/compass";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should work when there is sassLoader but not includePaths', () => {
    const result = mixinLoader.call(Object.assign({ options: { sassLoader: {} } }, context), source);
    const expected = `@import "~compass-mixins/lib/compass";\n${source}`;

    expect(result).to.equal(expected);
  });
});
