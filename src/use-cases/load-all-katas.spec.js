import {describe, it} from 'kavun';
import assert from 'assert';

import {loadAllKatasConstructor} from './load-all-katas.js';

import {loadViaAjax} from '../server/ajax.js';
const loadAllKatas = loadAllKatasConstructor({fetch: loadViaAjax});

describe('Load all katas', () => {
  it('a kata contains the `bundleName` (e.g. `es6/language`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assert(Reflect.has(firstKata, 'bundleName'));
    const lastKata = katas[katas.length - 1];
    assert(Reflect.has(lastKata, 'bundleName'));
  }, { timeout: 9000 });
  it('loads all katas configured', () => {

  });
});