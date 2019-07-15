const template = document.createElement('template');
template.innerHTML = `
    <style>
      :host {
      }
    </style>
    <slot>missing kata name</slot>
`;

class KataName extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({mode: 'open'});
    root.appendChild(template.content.cloneNode(true));
  }
  _selectInShadowRoot(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector);
  }
  get $chart() {
    return this._selectInShadowRoot('canvas');
  }
  connectedCallback() {
    const slots = this.shadowRoot.querySelectorAll('slot');
    const f = (e) => {
      slots[0].removeEventListener('slotchange', f); // remove right away, so our changes dont cause eternal loops
      const nodes = slots[0].assignedNodes();
      const isComponentConnected = nodes.length > 0;
      if (isComponentConnected) {
        const node = nodes[0];
        const text = node.textContent;

        if (!text.includes('`')) {
          return;
        }

        if (text.startsWith('`') && text.endsWith('`')) {
          const code = document.createElement('code');
          code.innerText = text.replace(/`/g, '');
          nodes[0].parentNode.appendChild(code);
          nodes[0].parentNode.removeChild(nodes[0]);
          return;
        }
        const pieces = text.split('`');

        const text1 = document.createTextNode(pieces[0]);
        nodes[0].parentNode.appendChild(text1);

        const code = document.createElement('code');
        code.innerText = pieces[1];
        nodes[0].parentNode.appendChild(code);

        const text2 = document.createTextNode(pieces.slice(2).join(''));
        nodes[0].parentNode.appendChild(text2);

        nodes[0].parentNode.removeChild(nodes[0]);
      }
    };
    slots[0].addEventListener('slotchange', f);
  }
  disconnectedCallback() {
  }
}

customElements.define('kata-name', KataName);
