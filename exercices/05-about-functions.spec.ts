import { expect } from 'chai';
const __ = Symbol('replace me');
type __ = never;
describe('about typed functions', () => {
  it.skip('should be typed values', () => {
    let sayHello: __;
    sayHello = (name) => __;

    expect(sayHello('TypeScript')).to.eq('Hello TypeScript');
  });

  it.skip('should accept optional arguments', () => {
    function sayHello(name: string) {
      //__
      return `Hello ${name || 'World'}`;
    }

    expect(sayHello()).to.eq(__);
  });

  it.skip('should work with default values', () => {
    let sayHello: __;
    sayHello = (msg = 'Hello', name) => `${msg} ${name}`;

    expect(sayHello(undefined, 'World')).to.eq(__);
  });

  it.skip('make sense with interfaces', (done) => {
    interface IPromise {
      __;
    }

    const myResolvedPromise: IPromise = {
      then(callBack) {
        setImmediate(() => callBack(__));
      },
    };

    myResolvedPromise.then((val) => {
      expect(val).to.be.true;
      done();
    });
  });

  it.skip('should accept any number of parameters', () => {
    let join = (separator: __, ...__: __[]) => elm.join(separator);

    expect(join(', ', 'Hello', 'TypeScript')).to.eq('Hello, TypeScript');
  });

  it.skip('lambda should not loose their this', () => {
    const donald = {
      name: 'Donald',
      greet(msg: string) {
        __;
      },
    };

    const donaldGreets = donald.greet('world');
    expect(donaldGreets()).to.eq('Donald says hello world');
  });
});
