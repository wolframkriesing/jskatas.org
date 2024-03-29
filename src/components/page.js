import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

const Page = ({kataBundles}) =>
  html`
    ${HeaderComponent()}
    <main>
      <p style="padding: 1rem">
        Formerly <b>ES6 Katas</b> - Now <b>JS Katas</b>.
        Learn JavaScript, the disciplined way. Learn all the details.
      </p>
      ${Filters()}
      ${kataBundles.map(kataBundle => KataBundle({bundle: kataBundle}))}
    </main>
    ${FooterComponent({katasCount: 97})}
  `;

const Filters = () => {
  return html`
    <input class='filter' id='showPlannedKatas' type='checkbox'>
    <label class='filter' for='showPlannedKatas'>Show planned katas</label>
  `;
};

const KataBundle = ({bundle}) => {
  const anchorName = `bundle-${bundle.nameSlug}`;
  return html`
    <div>
      <h2>
        <a href="#${anchorName}" title="${bundle.name}" id="${anchorName}">
          ${bundle.name} 
        </a>
        <span class="stats">available katas: ${bundle.publishedKatasCount}, unfinished or planned: ${bundle.katasCount-bundle.publishedKatasCount}</span>
      </h2>
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
    <div class="group ${group.publishedCount === 0 ? 'noPublishedKatas' : ''}">
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
