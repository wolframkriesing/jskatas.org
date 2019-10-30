import {describe, it, xit} from 'kavun';
import assert from 'assert';

import {loadAllKatasConstructor} from './load-all-katas.js';
import {allBundlesConfigs} from '../config.js';

import {loadViaAjax} from '../server/ajax.js';
const loadAllKatas = loadAllKatasConstructor({fetch: loadViaAjax});

describe('Load all katas', () => {
  it('a kata contains the `bundleName` (e.g. `es6/language`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assert(Reflect.has(firstKata, 'bundleName'));
    const lastKata = katas[katas.length - 1];
    assert(Reflect.has(lastKata, 'bundleName'));
  });
  it('loads all configured kata bundles', async () => {
    const allUrls = allBundlesConfigs.map(conf => conf.sourceUrl);
    let urlsCalled = [];
    const fakeFetch = async (url) => {
      urlsCalled.push(url);
      const bundleWithoutKatas = {items: []};
      return bundleWithoutKatas;
    };
    const loadAllKatas = loadAllKatasConstructor({fetch: fakeFetch});

    await loadAllKatas();

    assert.strictEqual(allUrls.length, urlsCalled.length, 'Expected the number of fetched URLs to be equal to all configured ones.');
    assert.deepStrictEqual(allUrls.sort(), urlsCalled.sort(), 'Not all configured URLs were fetched.');
  });
});