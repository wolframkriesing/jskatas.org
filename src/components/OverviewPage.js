import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

export const OverviewPage = ({katas}) =>
  html`
    <div>
      ${HeaderComponent()}
      <table>
        <thead>
          <tr>
            <th>Kata</th>
            <th></th>
            <th>Links</th>
          </tr>
        </thead>
        ${katas.map(kata => KataAsRow({kata}))}
      </table>
      ${FooterComponent({katasCount: 95})}
    </div>
  `;

const KataAsRow = ({kata}) => {
  return html`
    <tr>
      <td>${kata.groupName} - ${kata.name}</td>
      <td>
        <button>${kata.bundleName.split('/')[0].toUpperCase()}</button>
        <button>${kata.level.toLowerCase()}</button>
        <button>${kata.bundleName.split('/')[1]}</button>
      </td>
      <td><a href="${kata.tddbinUrl}">open kata</a></td>
    </tr>
  `;
};
