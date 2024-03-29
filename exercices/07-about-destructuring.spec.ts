import { expect } from 'chai';

describe('about destructuring arrays', () => {
  it.skip('should extract value from array', () => {
    let firstValue = [1];
    expect(firstValue).to.equal(1);
  });

  it.skip('should swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = _;
    expect([x, y]).to.deep.eq(['why', 'ax']);
  });

  it.skip('should count leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [, z] = all;
    expect(z).to.eq('zet');
  });

  it.skip('should extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [firstName, surname, age] = <any>user;

    expect(`${firstName} ${surname} = ${age} years`).to.eq('Some One = 23 years');
  });

  it.skip('should chain assignments', () => {
    let c: number, d: number;
    let a,
      b = ([c, d] = [1, 2]);
    expect([a, b, c, d]).to.deep.eq([1, 2, 1, 2]);
  });
});

describe('about destructuring objects', () => {
  it.skip('should be simple', () => {
    const x = { x: 1 };
    expect(x).to.equal(1);
  });

  it.skip('should find variables properties', () => {
    const magic = { first: 23, second: 42 };
    const { magic: second } = { magic };
    expect(second).to.equal(42);
  });

  it.skip('should mix object and array', () => {
    const {
      z: [x],
    } = { z: [23, 42] };
    expect(x).to.equal(42);
  });

  it.skip('should mix array and object', () => {
    const [, lang] = [null, { lang: 'ES6' }];
    expect(lang).to.equal('ES6');
  });

  it.skip('should missing refs become undefined ?', () => {
    const { z } = <any>{ x: 1, z: 2 };
    expect(z).to.equal(undefined);
  });

  it.skip('should destructure from builtins (string)', () => {
    const substr = 'hello';
    expect(substr).to.equal(String.prototype.substr);
  });
});
