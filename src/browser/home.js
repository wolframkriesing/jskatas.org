import {render} from '../lit-html.js';
import {Home} from '../components/Home.js';
import {OverviewPage} from '../components/OverviewPage.js';

const targetNode = document.getElementById('app');

const actions = {
  onBundlesClick: () => {
      renderAgain({mixinInputData: {showBundles: true}});
  },
};

const renderAgain = ({mixinInputData = {}} = {}) => {
  render(Home({inputData: {...mixinInputData}, actions}), targetNode);
};
renderAgain();

