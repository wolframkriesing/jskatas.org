import {bundleConfigs} from '../config.js';
import {TDDBIN_URL} from '../env.js';

const loadKatasForBundle = ({fetch}) => (bundleConfig) =>
  fetch(bundleConfig.sourceUrl)
    .then(({items: katas}) => katas
      .map(kata => ({
        ...kata,
        bundleName: bundleConfig.bundleName,
        tddbinUrl: TDDBIN_URL + `#?kata=${bundleConfig.bundleName}/${kata.path}`,
      }))
    )
;

export const loadAllKatasConstructor = ({fetch}) => async () => {
  const loadBundle = loadKatasForBundle({fetch});
  const allBundleLoaderFns = bundleConfigs.withEach(bundleConfig => loadBundle(bundleConfig));
  const katas = (await Promise.all(allBundleLoaderFns)).flat();

  const longname = kata => `${kata.groupName} - ${kata.name}`;
  return katas
    .map(kata => ({...kata, longName: longname(kata)}))
    .sort((kata1, kata2) => kata1.longName.toLowerCase() > kata2.longName.toLowerCase() ? 1 : -1)
  ;
};
