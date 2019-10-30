import {describe, it, xit} from 'kavun';
import assert from 'assert';

import {loadAllKatasConstructor} from './load-all-katas.js';
import {bundleConfigs} from '../config.js';

import {loadViaAjax} from '../server/ajax.js';
const loadAllKatas = loadAllKatasConstructor({fetch: loadViaAjax});

describe('Load all katas', () => {
  it('loads all configured kata bundles', async () => {
    let urlsCalled = [];
    const fakeFetch = async (url) => {
      urlsCalled.push(url);
      const bundleWithoutKatas = {items: []};
      return bundleWithoutKatas;
    };
    const loadAllKatas = loadAllKatasConstructor({fetch: fakeFetch});

    await loadAllKatas();

    bundleConfigs.withEach(config =>
      assert(urlsCalled.includes(config.sourceUrl), `Bundle "${config.bundleName}" was not loaded.`)
    );
  });
  it('a kata contains the `bundleName` (e.g. `es6/language`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assert(Reflect.has(firstKata, 'bundleName'));
    const lastKata = katas[katas.length - 1];
    assert(Reflect.has(lastKata, 'bundleName'));
  });
  it('each kata contains the `tddbinUrl` (e.g. `#?kata=es6/language/...`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assert(Reflect.has(firstKata, 'tddbinUrl'));
    assert(firstKata.tddbinUrl.endsWith('.js'));
  });
});
