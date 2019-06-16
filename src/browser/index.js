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
    const kataBundles = metadataJsons.map(({data, name}) => ({name, kataGroups: RawMetadata.toKataGroups(data)}));
    React.render(<Page kataBundles={kataBundles}/>, targetNode);
  }
}

const loadAllKatas = async () => {
  const metadataJsons = [];
  metadataJsons.push({name: 'ECMAScript 1', data: await loadViaAjax(metadataUrls.es1)});
  metadataJsons.push({name: 'ECMAScript 6', data: await loadViaAjax(metadataUrls.es6)});
  metadataJsons.push({name: 'ECMAScript 8', data: await loadViaAjax(metadataUrls.es8)});
  metadataJsons.push({name: 'Assertion Library Hamjest', data: await loadViaAjax(metadataUrls.hamjest)});

  _renderInBrowser(null, metadataJsons);
};
loadAllKatas();
