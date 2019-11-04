import {OverviewPage} from '../components/OverviewPage.js';
import {loadAllKatasConstructor} from '../use-cases/load-all-katas.js';
import {loadViaAjax as fetch} from './ajax.js';

const loadAllKatas = loadAllKatasConstructor({fetch});
const ssr = async () => {
  const katas = await loadAllKatas();
  const rendered = OverviewPage({inputData: {katas}, actions: {}});
  console.log(rendered);
};

ssr();
