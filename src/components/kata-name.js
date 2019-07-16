const template = document.createElement('template');
template.innerHTML = `
    <style>
      :host {
      }
      code {
        color: black;
        background: #EEEEEE;
      }
      slot {
        display: none;
      }
    </style>
    <slot>missing kata name</slot>
    <span id="kataName"></span>
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
  get $kataName() {
    return this._selectInShadowRoot('#kataName');
  }
  connectedCallback() {
    const slots = this.shadowRoot.querySelectorAll('slot');
    const f = (e) => {
      const nodes = slots[0].assignedNodes();
      const isComponentConnected = nodes.length > 0;
      if (isComponentConnected) {
        const node = nodes[0];
        const text = node.textContent;

        if (!text.includes('`')) {
          this.$kataName.appendChild(document.createTextNode(upperCaseFirstLetter(text)));
          return;
        }

        if (text.startsWith('`') && text.endsWith('`')) {
          const code = document.createElement('code');
          code.innerText = text.replace(/`/g, '');
          this.$kataName.appendChild(code);
          return;
        }
        const pieces = text.split('`');

        const text1 = document.createTextNode(upperCaseFirstLetter(pieces[0]));
        this.$kataName.appendChild(text1);

        const code = document.createElement('code');
        code.innerText = pieces[1];
        this.$kataName.appendChild(code);

        const text2 = document.createTextNode(pieces.slice(2).join(''));
        this.$kataName.appendChild(text2);
      }
    };
    slots[0].addEventListener('slotchange', f);
  }
  disconnectedCallback() {
  }
}

const upperCaseFirstLetter = word => {
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.substring(1);
};

customElements.define('kata-name', KataName);
