import {loadViaAjax} from './ajax.js';
import {BundlesPage} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const render = kataBundles => BundlesPage({kataBundles});

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  console.log(render(kataBundles));
};
loadAllKatas();
