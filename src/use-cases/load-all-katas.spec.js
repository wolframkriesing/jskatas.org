import {describe, it, xit} from 'kavun';
import assert from 'assert';
import {assertThat, endsWith, not, hasProperty, hasItem} from 'hamjest';

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
      assertThat(urlsCalled, hasItem(config.sourceUrl))
    );
  });
  it('a kata contains the `bundleName` (e.g. `es6/language`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assertThat(firstKata, hasProperty('bundleName'));
    const lastKata = katas[katas.length - 1];
    assertThat(lastKata, hasProperty('bundleName'));
  });
  it('each kata contains the `tddbinUrl` (e.g. `#?kata=es6/language/...`)', async () => {
    const katas = await loadAllKatas();

    const firstKata = katas[0];
    assertThat(firstKata, hasProperty('tddbinUrl'));
    assertThat(firstKata.tddbinUrl, not(endsWith('.js')));
  });
  it('the katas are sorted by "$groupName $name" alphabetically', async () => {
    const katas = await loadAllKatas();

    assert(katas[0].longName.toLowerCase() < katas[1].longName.toLowerCase());

    katas.map(((_, index) => {
      if (index > 0) return;
      assert(katas[index].longName.toLowerCase() < katas[index + 1].longName.toLowerCase());
    }));
  });
});
