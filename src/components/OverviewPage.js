import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

export const OverviewPage = ({katas}) =>
  html`
    <div>
      ${HeaderComponent()}
      <table>
        <tr>
          <th>Bundle name</th>
          <th>Group</th>
          <th>Kata Name</th>
          <th>Level</th>
          <th>Links</th>
        </tr>
        ${katas.map(kata => KataAsRow({kata}))}
      </table>
      ${FooterComponent({katasCount: 95})}
    </div>
  `;

const KataAsRow = ({kata}) => {
  return html`
    <tr>
      <td>${kata.bundleName}</td>
      <td>${kata.groupName}</td>
      <td>${kata.name}</td>
      <td>${kata.level}</td>
      <td>${kata.tddbinUrl}</td>
    </tr>
  `;
};
