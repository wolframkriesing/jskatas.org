import {h} from 'preact';
import {render as preactRender} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

const _renderOnServer = (err, metadataJsons) => {
  if (err) {
    throw new Error(err);
  } else {
    const kataBundles = metadataJsons.map(({data, name}) => ({name, kataBundle: RawMetadata.toKataBundle(data)}));
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
  
  const kataBundlesConfig = [];
  kataBundlesConfig.push({name: 'ECMAScript 1', data: bundlesMetadata[0]});
  kataBundlesConfig.push({name: 'ECMAScript 6', data: bundlesMetadata[1]});
  kataBundlesConfig.push({name: 'ECMAScript 8', data: bundlesMetadata[2]});
  kataBundlesConfig.push({name: 'Assertion Library Hamjest', data: bundlesMetadata[3]});

  return _renderOnServer(null, kataBundlesConfig);
};