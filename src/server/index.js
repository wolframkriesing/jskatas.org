import {h} from 'preact';
import {render as preactRender} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

function _renderOnServer(err, metadataJsons) {
  if (err) {
    throw new Error(err);
  } else {
    const kataBundles = metadataJsons.map(({data, name}) => ({name, kataGroups: RawMetadata.toKataGroups(data)}));
    return preactRender(<Page kataBundles={kataBundles}/>);
  }
}

export const render = async (onDone) => {
  // loadViaNode(
  //   metadataUrls.hamjest,
  //   (...args) => { onDone(_renderOnServer(...args)); }
  // );

   const metadataJsons = [];
   metadataJsons.push({name: 'ECMAScript 1', data: await loadViaNode(metadataUrls.es1)});
   metadataJsons.push({name: 'ECMAScript 6', data: await loadViaNode(metadataUrls.es6)});
   metadataJsons.push({name: 'ECMAScript 8', data: await loadViaNode(metadataUrls.es8)});
   metadataJsons.push({name: 'Assertion Library Hamjest', data: await loadViaNode(metadataUrls.hamjest)});

  onDone(_renderOnServer(null, metadataJsons));
};