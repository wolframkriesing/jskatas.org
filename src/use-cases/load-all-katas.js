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

export const loadAllKatas = async () => {
  const configs = allMetadataUrls;
  const bundles = Object.entries(configs)
    .map(([bundleName, sourceUrl]) => ({bundleName, sourceUrl}))
  ;
  const katas = [
    ...await loadKatasForBundle(bundles[0]),
    // ...await loadKatasForBundle(bundles[1]),
  ];
  return katas;
};
