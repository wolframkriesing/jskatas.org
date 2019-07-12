import {h, Component} from 'preact';

const PLAUSIBLE_URL = 'https://plausible.io/jskatas.org';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <h1>JavaScript Katas</h1>
        <p>Learn JavaScript (the language and more) by doing it. Fix failing tests. Keep all learnings.</p>
        <a href={PLAUSIBLE_URL} className="icon plausible" title="Public traffic stats">
          <img src="./plausible_badge.svg" />
        </a>
      </header>
    );
  }
}

