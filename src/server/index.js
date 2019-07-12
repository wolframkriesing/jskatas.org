import {h} from 'preact';
import {render as preactRender} from 'preact-render-to-string';
import {loadViaNode} from './http-get.js';
import Page from '../components/page.js';
import {loadKataBundles} from '../pagedata.js';
import dotenv from 'dotenv';
dotenv.config();

const renderOnServer = (kataBundles) =>
  preactRender(<Page kataBundles={kataBundles}/>);

export const render = async () => {
  const kataBundles = await loadKataBundles({fetch: loadViaNode});
  return renderOnServer(kataBundles);
};