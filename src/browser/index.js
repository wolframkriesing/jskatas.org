import {render, h} from 'preact';
import {loadViaAjax} from './ajax.js';
import {Page} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const renderInBrowser = kataBundles => {
  const targetNode = document.getElementById('app');
  render(<Page kataBundles={kataBundles}
               showDescriptions={showDescriptions()}
               onUpdateOption={updateOption}
  />, document.body, targetNode);
};

const showDescriptions = () => {
  if (typeof localStorage !== undefined) {
    let showDescriptions = false;
    try {
      showDescriptions = localStorage.getItem('options.showDescriptions');
      return JSON.parse(showDescriptions);
    } catch (e) {
      console.log('Parsing `options.showDescriptions` from localStorage failed. Value was: ' + JSON.stringify(showDescriptions));
    }
  }
  return false;
};
const updateOption = (key, value) => {
  if (typeof localStorage !== undefined) {
    localStorage.setItem(`options.${key}`, value);
  }
};

const loadAllKatas = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaAjax});
  renderInBrowser(kataBundles);
};
loadAllKatas();
