import {render, h} from 'preact';
import {loadViaAjax} from './ajax.js';
import Page from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const renderInBrowser = kataBundles => {
  const targetNode = document.getElementById('app');
  render(<Page kataBundles={kataBundles} />, document.body, targetNode);
};

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  renderInBrowser(kataBundles);
};
loadAllKatas();
