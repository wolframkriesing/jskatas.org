import {allBundlesConfigs} from '../config.js';

const loadKatasForBundle = ({fetch}) => (bundleConfig) =>
  fetch(bundleConfig.sourceUrl)
    .then(({items: katas}) => katas
      .map(kata => ({
        ...kata,
        bundleName: bundleConfig.bundleName,
        // tddbinUrl: TDDBIN_URL + `#?kata=${bundleConfig.bundleName}/`,
      }))
    )
;

export const loadAllKatasConstructor = ({fetch}) => async () => {
  const bundles = allBundlesConfigs;
  const loadBundle = loadKatasForBundle({fetch});
  const katas = [
    ...await loadBundle(bundles[0]),
    // ...await loadBundle(bundles[1]),
    // ...await loadBundle(bundles[2]),
  ];
  return katas;
};
