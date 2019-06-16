// import '@babel/polyfill';
import React from 'react';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import RawMetadata from '../rawmetadata.js';
import {metadataUrls} from '../config.js';

function _renderInBrowser(err, metadataJsons) {
  if (err) {
    console.log(err);
  } else {
    const targetNode = document.getElementById('app');
    const allKataGroups = metadataJsons.map(json => RawMetadata.toKataGroups(json));
    React.render(<Page kataBundles={allKataGroups}/>, targetNode);
  }
}

const loadAllKatas = async () => {
  const metadataJsons = [];
  metadataJsons.push(await loadViaAjax(metadataUrls.es1));
  metadataJsons.push(await loadViaAjax(metadataUrls.es6));
  metadataJsons.push(await loadViaAjax(metadataUrls.es8));
  metadataJsons.push(await loadViaAjax(metadataUrls.hamjest));

  _renderInBrowser(null, metadataJsons);
};
loadAllKatas();
