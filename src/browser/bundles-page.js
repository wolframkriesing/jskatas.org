import {render} from '../lit-html.js';
import {loadViaAjax} from './ajax.js';
import {BundlesPage} from '../components/BundlesPage.js';
import {loadKataBundles} from '../pagedata.js';

const renderInBrowser = kataBundles => {
  const targetNode = document.getElementById('app');
  render(BundlesPage({kataBundles}), targetNode);
};

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  renderInBrowser(kataBundles);
};
loadAllKatas();
