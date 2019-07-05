import {metadataUrls} from './config.js';
import RawMetadata from './rawmetadata.js';

export const loadKataBundles = async ({fetch}) => {
    const bundlesMetadata = await Promise.all([
        fetch(metadataUrls.es1),
        fetch(metadataUrls.es6),
        fetch(metadataUrls.es8),
        fetch(metadataUrls.hamjest),
    ]);

    const kataBundles = [];
    kataBundles.push(RawMetadata.toKataBundle('ECMAScript 1', bundlesMetadata[0]));
    kataBundles.push(RawMetadata.toKataBundle('ECMAScript 6', bundlesMetadata[1]));
    kataBundles.push(RawMetadata.toKataBundle('ECMAScript 8', bundlesMetadata[2]));
    kataBundles.push(RawMetadata.toKataBundle('Assertion Library Hamjest', bundlesMetadata[3]));
    return kataBundles;
};