import {html, nothing} from '../lit-html.js';

import {HeaderComponent} from './header.js';
import {FooterComponent} from './footer.js';

export const OverviewPage = ({inputData, actions}) => {
  const {katas, kataWithDetails} = inputData;
  const showKataModal = kata => actions.showKataWithDetails(kata);
  const hideKataModal = () => actions.hideKataWithDetails();
  const onTableClick = (evt) => {
    if (evt.target.tagName.toLowerCase() === 'td') {
      const trNode = evt.target.parentNode;
      showKataModal(katas[Number.parseInt(trNode.dataset.index, 10)])
    }
  };
  return html`
    <div>
      ${HeaderComponent()}
      <table @click=${onTableClick}>
        <thead>
          <tr>
            <th>Kata</th>
            <th></th>
            <th>Links</th>
          </tr>
        </thead>
        ${katas.map((kata, index) => KataAsRow({kata, index}))}
      </table>
      ${kataWithDetails ? KataOverlay({kata: kataWithDetails, onClose: hideKataModal}) : nothing}
      ${FooterComponent({katasCount: 95})}
    </div>
  `;
};

const KataAsRow = ({kata, index}) => {
  const kataLevel = kata.level.toLowerCase();
  const levelButton = kataLevel === 'tbd' ? '' : html`<button class="level">${kataLevel}</button>`;
  return html`
    <tr data-index=${index}>
      <td>${kata.longName}</td>
      <td>
        <button class="main-category">${kata.bundleName.split('/')[0].toUpperCase()}</button>
        ${levelButton}
        <button class="sub-category">${kata.bundleName.split('/')[1]}</button>
      </td>
      <td><a href="${kata.tddbinUrl}">open kata</a></td>
    </tr>
  `;
};

const KataOverlay = ({kata, onClose}) => {
  return html`
    <div class="kata-overlay">
      <h2>${kata.longName} <button @click=${onClose}>[close modal]</button></h2>
      <code>
${JSON.stringify(kata, null, 4)}
      </code>
    </div>
  `;
};
