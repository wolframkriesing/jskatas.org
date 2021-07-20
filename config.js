import {KATAS_URL} from './env.js';

const katasUrl = KATAS_URL + '/katas';

// @deprecated
export const metadataUrls = {
  es1: `${katasUrl}/es1/language/__grouped__.json`,
  es1LearnByRewriting: `${katasUrl}/es1/learn-by-rewriting/__grouped__.json`,
  es6: `${katasUrl}/es6/language/__grouped__.json`,
  es7: `${katasUrl}/es7/language/__grouped__.json`,
  es8: `${katasUrl}/es8/language/__grouped__.json`,
  es2019: `${katasUrl}/es2019/language/__grouped__.json`,
  es2020: `${katasUrl}/es2020/language/__grouped__.json`,
  hamjest: `${katasUrl}/libraries/hamjest/__grouped__.json`,
};

const bundles = [
  'es1/language',
  'es1/learn-by-rewriting',
  'es6/language',
  'es7/language',
  'es8/language',
  'es2019/language',
  'es2020/language',
  'libraries/hamjest',
];
class BundleConfig {
  static fromBundleName(bundleName) {
    const inst = new BundleConfig();
    inst.bundleName = bundleName;
    inst.sourceUrl = `${katasUrl}/${bundleName}/__all__.json`;
    return inst;
  }
}
class BundleConfigs {
  static fromBundles(bundles) {
    return new BundleConfigs(bundles);
  }
  constructor(bundles) {
    this._bundles = bundles;
    this._buildConfigs();
  }
  _buildConfigs() {
    const toAllMetadataUrlEntry = bundleName => BundleConfig.fromBundleName(bundleName);
    this._configs = this._bundles.map(toAllMetadataUrlEntry);
  }
  withEach(fn) {
    return this._configs.map(config => fn(config));
  }
}
export const bundleConfigs = BundleConfigs.fromBundles(bundles);

export const FLAT_METADATA_URL = `${katasUrl}/es6/language/__all__.json`;
