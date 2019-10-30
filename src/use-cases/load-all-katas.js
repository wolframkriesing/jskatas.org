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
  const loadBundle = loadKatasForBundle({fetch});
  const katas = (await Promise.all(allBundlesConfigs.map(bundle => loadBundle(bundle))))
    .flat()
  ;
  return katas;
};
