import './configure-env.js';
import {render} from 'lit-html';
import {loadViaNode} from './http-get.js';
import {Page} from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';

// const renderOnServer = kataBundles =>
//   renderToString(<Page kataBundles={kataBundles} />);
//
// export const render = async () => {
//   const kataBundles = await loadKataBundles({fetch: loadViaNode});
//   return renderOnServer(kataBundles);
// };
