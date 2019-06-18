import {h} from 'preact';
import {render as preactRender} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

function _renderOnServer(err, metadataJson) {
  if (err) {
    throw new Error(err);
  } else {
    const kataBundles = metadataJsons.map(({data, name}) => ({name, kataGroups: RawMetadata.toKataGroups(data)}));
    return preactRender(<Page kataBundles={kataBundles}/>);
  }
}

export const render = (onDone) => {
  loadViaNode(
    metadataUrls.hamjest,
    (...args) => { onDone(_renderOnServer(...args)); }
  );
};