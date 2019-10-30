import {describe, it} from 'kavun';
import assert from 'assert';
import {allMetadataUrls} from '../config.js';
import {TDDBIN_URL} from "../env.js";
import fetch from 'isomorphic-fetch';

const loadKatasForBundle = (bundleConfig) =>
  fetch(bundleConfig.sourceUrl)
    .then(response => response.json())
    .then(({items: katas}) => katas
      .map(kata => ({
        ...kata,
        bundleName: bundleConfig.bundleName,
        // tddbinUrl: TDDBIN_URL + `#?kata=${bundleConfig.bundleName}/`,
      }))
    )
;

const loadAllKatas = async (configs) => {
  const bundles = Object.entries(configs)
    .map(([bundleName, sourceUrl]) => ({bundleName, sourceUrl}))
  ;
  const katas = [
    ...await loadKatasForBundle(bundles[0]),
    // ...await loadKatasForBundle(bundles[1]),
  ];
  return katas;
};

describe('Load all katas', () => {
  it('a kata contains the `bundleName` (e.g. `es6/language`)', async () => {
    const katas = await loadAllKatas(allMetadataUrls);

    const firstKata = katas[0];
    assert(Reflect.has(firstKata, 'bundleName'));
    const lastKata = katas[katas.length - 1];
    assert(Reflect.has(lastKata, 'bundleName'));
  }, { timeout: 9000 });
});