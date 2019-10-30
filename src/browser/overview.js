import {render} from '../lit-html.js';
import {OverviewPage} from '../components/OverviewPage.js';
import {loadAllKatasConstructor} from '../use-cases/load-all-katas.js';
import {loadViaAjax as fetch} from './ajax.js';

const renderInBrowser = katas => {
  const targetNode = document.getElementById('app');
  render(OverviewPage({katas}), targetNode);
};

const loadAllKatas = loadAllKatasConstructor({fetch});
(async () => {
    renderInBrowser(await loadAllKatas());
  }
)();
