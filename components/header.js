import {html} from '../lit-html.js';

const HeaderComponent = () => {
  return html`
    <header>
      <a href="/"><h1>JavaScript Katas</h1></a>
      <p>
        Learn JavaScript (the language and more) by doing it. Fix failing tests.
        Keep all learnings.
      </p>
    </header>
  `;
};

export {HeaderComponent};
