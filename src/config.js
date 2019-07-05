const DOMAIN = process.env['KATAS_URL'] || 'https://katas.tddbin.com';
export const metadataUrls = {
  es1: `${DOMAIN}/katas/es1/language/__grouped__.json`,
  es6: `${DOMAIN}/katas/es6/language/__grouped__.json`,
  es8: `${DOMAIN}/katas/es8/language/__grouped__.json`,
  hamjest: `${DOMAIN}/katas/libraries/hamjest/__grouped__.json`,
};
export const GROUPED_METADATA_URL = `${DOMAIN}/katas/es6/language/__grouped__.json`;
export const FLAT_METADATA_URL = `${DOMAIN}/katas/es6/language/__all__.json`;