import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

function _renderOnServer(err, metadataJson) {
  if (err) {
    throw new Error(err);
  } else {
    return ReactDOMServer.renderToString(<Page kataGroups={RawMetadata.toKataGroups(metadataJson)}/>);
  }
}

export const render = (onDone) => {
  loadViaNode(
    metadataUrls.hamjest,
    (...args) => { onDone(_renderOnServer(...args)); }
  );
};