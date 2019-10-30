import {bundleConfigs} from '../config.js';
import {TDDBIN_URL} from '../env.js';

const loadKatasForBundle = ({fetch}) => (bundleConfig) =>
  fetch(bundleConfig.sourceUrl)
    .then(({items: katas}) => katas
      .map(kata => ({
        ...kata,
        bundleName: bundleConfig.bundleName,
        tddbinUrl: TDDBIN_URL + `#?kata=${bundleConfig.bundleName}/${kata.path}.js`,
      }))
    )
;

export const loadAllKatasConstructor = ({fetch}) => async () => {
  const loadBundle = loadKatasForBundle({fetch});
  const allBundleLoaderFns = bundleConfigs.withEach(bundleConfig => loadBundle(bundleConfig));
  const katas = (await Promise.all(allBundleLoaderFns)).flat();
  return katas;
};
