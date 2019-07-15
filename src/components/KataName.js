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
    slots[0].addEventListener('slotchange', (e) => {
      const nodes = slots[0].assignedNodes();
      const isComponentConnected = nodes.length > 0;
      if (isComponentConnected) {
        const node = nodes[0];
        const text = node.textContent;
        const newText = text
          .replace('`', '<code>')
          .replace('`', '</code>');
console.log("replaced text= ", newText);
        node.textContent = newText;
      }
    });
  }
  disconnectedCallback() {
  }
}

customElements.define('kata-name', KataName);
