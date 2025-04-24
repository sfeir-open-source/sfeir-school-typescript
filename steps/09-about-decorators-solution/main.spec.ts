import { beforeEach, describe, expect, it } from 'vitest';
import { logConstructor, logMethod } from '../common/log';

describe('about decorators', () => {
  var calculator: Calculator,
    logStack: string[] = [];

  console.info = (...args: any[]) => logStack.push(...args);

  @logConstructor
  class Calculator {
    @logMethod
    double(n: number) {
      return n * 2;
    }
  }

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('1-should log constructor', () => {
    expect(logStack).to.eql(['Create constructor Calculator']);
  });

  it('2-should log methods', () => {
    calculator.double(2);
    expect(logStack).to.eql(['Create constructor Calculator', 'Call: double(2) => 4']);
  });
});
