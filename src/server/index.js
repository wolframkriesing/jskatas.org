import {h} from 'preact';
import {render as preactRender} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

const _renderOnServer = (err, kataBundles) => {
  if (err) {
    throw new Error(err);
  } else {
    return preactRender(<Page kataBundles={kataBundles}/>);
  }
};

export const render = async () => {
  const bundlesMetadata = await Promise.all([
    loadViaNode(metadataUrls.es1),
    loadViaNode(metadataUrls.es6),
    loadViaNode(metadataUrls.es8),
    loadViaNode(metadataUrls.hamjest),
  ]);
  
  const kataBundles = [];
  kataBundles.push(RawMetadata.toKataBundle('ECMAScript 1', bundlesMetadata[0]));
  kataBundles.push(RawMetadata.toKataBundle('ECMAScript 6', bundlesMetadata[1]));
  kataBundles.push(RawMetadata.toKataBundle('ECMAScript 8', bundlesMetadata[2]));
  kataBundles.push(RawMetadata.toKataBundle('Assertion Library Hamjest', bundlesMetadata[3]));

  return _renderOnServer(null, kataBundles);
};