import { TestFunction } from 'vitest';

export function withDone<ExtraDone = { done: VoidFunction }>(fn: TestFunction<ExtraDone>): TestFunction<ExtraDone> {
  return async context => new Promise(done => fn({ ...context, done }));
}
