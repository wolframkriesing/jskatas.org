import './configure-env.js';
import {h} from 'preact';
import {render as renderToString} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

const renderOnServer = kataBundles =>
  renderToString(<Page kataBundles={kataBundles} />);

export const render = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaNode});
  return renderOnServer(kataBundles);
};
