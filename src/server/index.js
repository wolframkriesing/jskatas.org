import {render} from '../lit-html.js';
import {loadViaAjax} from './ajax.js';
import {Page} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const renderInBrowser = kataBundles => {
  const container = {};
  render(Page({kataBundles}), container);
};

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  renderInBrowser(kataBundles);
};
loadAllKatas();
