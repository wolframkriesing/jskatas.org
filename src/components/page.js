import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

const Page = ({kataBundles}) =>
  html`
    ${HeaderComponent()}
    <main>
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
      ${kataBundles.map(kataBundle => KataBundle({bundle: kataBundle}))}
      ${FooterComponent({katasCount: 95})}
    </main>
  `;
const KataBundle = ({bundle}) => {
  const anchorName = `bundle-${bundle.nameSlug}`;
  return html`
    <div>
      <a href="#${anchorName}" title="${bundle.name}" id="${anchorName}"><h2>${bundle.name}</h2></a>
      ${bundle
    .allGroups()
    .map(group =>
      KataGroup({
        group,
        isNewestKataCheck: bundle.isNewestKata.bind(bundle),
      }),
    )}
    </div>
  `
};
const KataGroup = ({group, isNewestKataCheck}) =>
  html`
    <div class="group">
      <h3>${group.name}</h3>
      ${group.katas.map(kata =>
    Kata({kata, isNewest: isNewestKataCheck(kata)}),
  )}
    </div>
  `;
const Kata = ({kata, isNewest}) => {
  const {url, name, level, isPublished} = kata;
  const marker = new Map([
    [true, ''], // the default value
    [
      level === 'BEGINNER',
      html`
        <span class="notification-bubble easy">easy</span>
      `,
    ],
    [
      isNewest,
      html`
        <span class="notification-bubble new">new</span>
      `,
    ],
    [
      !isPublished,
      html`
        <span class="notification-bubble unpublished">planned</span>
      `,
    ],
  ]).get(true);
  const classNames = ['kata'];
  if (!isPublished) {
    classNames.push('unpublished');
  }
  return html`
    <div class=${classNames.join(' ')}>
      <a href=${url} target="_blank" rel="noopener">
        <kata-name>${name}</kata-name>
      </a>
      ${marker} ${KataDetails({kata})}
    </div>
  `;
};

const KataDetails = ({kata}) =>
  html`
    <span class="details">
      <h3>
        ${kata.name} (#${kata.id})
      </h3>
      <p>${kata.description}</p>
      Difficulty: ${kata.level.toLowerCase()}
      <br />
      ${KataLinks({links: kata.links})}
    </span>
  `;
const KataLinks = ({links = []}) => {
  if (links.length === 0) {
    return nothing;
  }
  return html`
    <section>
      <h3>Links for futher reading</h3>
      <ul>
        ${links.map(
    link => html`
            <li>
              <a href=${link.url} rel="noopener">${link.comment}</a>
            </li>
          `,
  )}
      </ul>
    </section>
  `;
};

export {Page};
