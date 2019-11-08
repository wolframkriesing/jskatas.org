import {render} from '../lit-html.js';
import {HomePage} from '../components/HomePage.js';

const targetNode = document.getElementById('app');

const actions = {
  onBundlesClick: () => {
      renderAgain({mixinInputData: {showBundles: true}});
  },
};

const renderAgain = ({mixinInputData = {}} = {}) => {
  render(HomePage({inputData: {...mixinInputData}, actions}), targetNode);
};
renderAgain();

