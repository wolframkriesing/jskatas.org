import {render} from '../lit-html.js';
import {loadViaAjax} from './ajax.js';
import {Page} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const renderInBrowser = kataBundles => {
  const targetNode = document.getElementById('app');
  render(Page({kataBundles}), targetNode);
};

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  renderInBrowser(kataBundles);
};
loadAllKatas();
