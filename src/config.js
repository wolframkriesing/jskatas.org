const KATAS_URL = process.env.KATAS_URL + '/katas';

export const metadataUrls = {
  es1: `${KATAS_URL}/es1/language/__grouped__.json`,
  es6: `${KATAS_URL}/es6/language/__grouped__.json`,
  es7: `${KATAS_URL}/es7/language/__grouped__.json`,
  es8: `${KATAS_URL}/es8/language/__grouped__.json`,
  es10: `${KATAS_URL}/es10/language/__grouped__.json`,
  hamjest: `${KATAS_URL}/libraries/hamjest/__grouped__.json`,
};
export const FLAT_METADATA_URL = `${KATAS_URL}/es6/language/__all__.json`;
