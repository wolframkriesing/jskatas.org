import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

export const HomePage = ({inputData: {showBundles}, actions}) => {
  // const activatePortal = p => {
  //     p.target.activate();
  // };
  const onBundlesClick = evt => {
    if ('HTMLPortalElement' in window) {
        evt.preventDefault();
        actions.onBundlesClick();
    }
  };
  return html`
    <div>
      ${HeaderComponent()}
      <p style="padding: 1rem">
        I learned ES6 by writing it and failing. Out of this the es6katas
        evolved. And since, this allowed me to always again go back and
        (re-)learn ES6 I wrote katas for ES8, later ES1 (I always got the
        <code>sort()</code> function wrong). At some point I started to learn a
        very expressive assertion library
        <a href="https://github.com/rluba/hamjest" rel="noopener">hamjest</a> by writing katas
        for it, and so this page came about.
        <br />
        Enjoy and I hope you have fun learning with it.
        <br />
        Wolfram Kriesing
      </p>
      
      <a href="/katas/bundles/" @click=${onBundlesClick}>kata by bundles</a>
      <a href="/katas/overview/">overview</a>
      ${showBundles ? Portal() : nothing}
      
      ${FooterComponent({katasCount: 95})}
    </div>
  `
};

const Portal = () => {
    return html `
      <portal 
        src="/katas/bundles/" 
        @load=${evt => {
                // const portal = evt.target;
                // portal.classList.add('portal-reveal');
                // portal.addEventListener('transitionend', evt => {
                //     if (evt.propertyName === 'transform') {
                //         portal.activate();
                //     }
                // });
            }
        }
      />
    `;    
};
/*
      <portal src="/katas/bundles/" @click=${activatePortal}"
        style="transform: scale(0.2); width: 100%; height: 100%; box-shadow: 0 0 20px 10px #999;"></portal>
      <portal src="/katas/overview/" style="transform: scale(0.2); width: 100%; height: 100%; box-shadow: 0 0 20px 10px #999;"></portal>

 */