import { describe, expect, it } from 'vitest';

import { bar, default as default1, foo } from '../lib/monModule';
import default2 from '../lib/monModule';

import * as star from '../lib/oldStyleExport';
import asDefault from '../lib/oldStyleExport';

const __ = Symbol('replace me');

describe('typescript exports', () => {
  it('different default syntax import should be equivalent', () => {
    expect(default1 === default2).to.eq(true);
  });

  it('should properly export bar, see export.ts', () => {
    expect(bar).to.eq('bar');
  });

  it('should properly export foo, see export.ts', () => {
    expect(foo).to.eq('foo');
  });
});

describe('node exports', () => {
  xit('should be imported with * as ..., see oldStyleExport.ts', () => {
    expect(star).to.eq({ default: 'this is the old default' });
  });

  it("should not be imported with 'default' key", () => {
    expect(star.default).to.eq(asDefault);
  });

  it('should not be imported as a typescript default export', () => {
    expect(asDefault).to.eq('this is the old default');
  });
});

describe('node require() with es6 export', () => {
  const oldStyleImport = require('../lib/monModule');

  it('should be imported as es6 import', () => {
    expect(oldStyleImport).to.deep.eq({
      foo: 'foo',
      bar: 'bar',
      default: "ceci est l'export par defaut 'façon typescript' !"
    });
  });
});
