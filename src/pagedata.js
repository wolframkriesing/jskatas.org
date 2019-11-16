import {TDDBIN_URL} from './env.js';
import {metadataUrls} from './config.js';
import RawMetadata from './rawmetadata.js';

export const loadKataBundles = async ({fetch}) => {
  const bundlesMetadata = await Promise.all([
    fetch(metadataUrls.es1),
    fetch(metadataUrls.es1LearnByRewriting),
    fetch(metadataUrls.es6),
    fetch(metadataUrls.es7),
    fetch(metadataUrls.es8),
    fetch(metadataUrls.es10),
    fetch(metadataUrls.hamjest),
  ]);

  const kataBundles = [];
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es1',
      name: 'ECMAScript 1',
      metadata: bundlesMetadata[0],
      url: TDDBIN_URL + '#?kata=es1/language/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es1rewrite',
      name: 'ECMAScript 1 - Learn by rewriting',
      metadata: bundlesMetadata[1],
      url: TDDBIN_URL + '#?kata=es1/learn-by-rewriting/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es6',
      name: 'ECMAScript 6',
      metadata: bundlesMetadata[2],
      url: TDDBIN_URL + '#?kata=es6/language/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es7',
      name: 'ECMAScript 7',
      metadata: bundlesMetadata[3],
      url: TDDBIN_URL + '#?kata=es7/language/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es8',
      name: 'ECMAScript 8',
      metadata: bundlesMetadata[4],
      url: TDDBIN_URL + '#?kata=es8/language/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'es10',
      name: 'ECMAScript 10',
      metadata: bundlesMetadata[5],
      url: TDDBIN_URL + '#?kata=es10/language/',
    }),
  );
  kataBundles.push(
    RawMetadata.toKataBundle({
      anchor: 'hamjest',
      name: 'Assertion Library Hamjest',
      metadata: bundlesMetadata[6],
      url: TDDBIN_URL + '#?kata=libraries/hamjest/',
    }),
  );
  return kataBundles;
};
