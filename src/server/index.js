import {loadViaAjax} from './ajax.js';
import {Page} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const render = kataBundles => Page({kataBundles});

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  console.log(render(kataBundles));
};
loadAllKatas();
