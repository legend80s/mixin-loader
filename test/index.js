/* global describe it */

const { expect } = require('chai');
const mixinLoader = require('../index');

const context = {
  cacheable() {
    // EMPTY
  },
};

const source = `
.btn {
    @include border-radius(1px, 1px);
  }
`;

describe('mixin-loader', () => {
  // main test begin
  // mixin of css3 begin
  it('should work when query is a dash-separated name', () => {
    const query = '?mixins[]=border-radius';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = `@import "compass/css3/border-radius";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should work when query is a no dash-separated name', () => {
    const query = '?mixins[]=flexbox';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = `@import "compass/css3/flexbox";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should work when query is a dash-separated name with a no dash', () => {
    const query = '?mixins[]=border-radius,mixins[]=flexbox';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = `@import "compass/css3/border-radius";\n@import "compass/css3/flexbox";\n${source}`;

    expect(result).to.equal(expected);
  });

  it('should import all css3 mixins when mixin is `css3`', () => {
    const query = '?mixins[]=css3';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = `@import "compass/css3";\n${source}`;

    expect(result).to.equal(expected);
  });
  // mixin of css3 end
  // main test end

  // boundary test begin
  it('should equal `source` when query is empty', () => {
    const query = '';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });

  it('should equal `source` when query is `?`', () => {
    const query = '?';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });
  it('should equal `source` when query is `?mixins`', () => {
    const query = '?mixins';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });
  it('should equal `source` when query is ?mixins[]=', () => {
    const query = '?mixins[]=';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });
  it('should equal `source` when query body is ?mixins[]', () => {
    const query = '?mixins[]';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });
  it('should equal `source` when query body is ?hello[]=flexbox', () => {
    const query = '?hello[]=flexbox';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });

  it('should equal `source` when query is undefined', () => {
    const query = undefined;
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });

  it('should equal `source` when query is a mixin not found in compass', () => {
    const query = '?mixins[]=inexist-mixin';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = source;

    expect(result).to.equal(expected);
  });

  it('should ignore inexist mixin when query has both an existing and an inexisting mixin', () => {
    const query = '?mixins[]=inexist-mixin,mixins[]=flexbox';
    const result = mixinLoader.call(Object.assign({ query }, context), source);
    const expected = `@import "compass/css3/flexbox";\n${source}`;

    expect(result).to.equal(expected);
  });
  // boundary test end
});
