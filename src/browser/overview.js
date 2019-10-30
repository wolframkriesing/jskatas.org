import {render} from '../lit-html.js';
import {OverviewPage} from '../components/OverviewPage.js';
import {loadAllKatas} from '../use-cases/load-all-katas.js';

const renderInBrowser = katas => {
  const targetNode = document.getElementById('app');
  render(OverviewPage({katas}), targetNode);
};

(async () => {
    renderInBrowser(await loadAllKatas());
  }
)();
