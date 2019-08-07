import {KATAS_URL} from './env.js';

const katasUrl = KATAS_URL + '/katas';

export const metadataUrls = {
  es1: `${katasUrl}/es1/language/__grouped__.json`,
  es6: `${katasUrl}/es6/language/__grouped__.json`,
  es7: `${katasUrl}/es7/language/__grouped__.json`,
  es8: `${katasUrl}/es8/language/__grouped__.json`,
  es10: `${katasUrl}/es10/language/__grouped__.json`,
  hamjest: `${katasUrl}/libraries/hamjest/__grouped__.json`,
};
export const FLAT_METADATA_URL = `${katasUrl}/es6/language/__all__.json`;
