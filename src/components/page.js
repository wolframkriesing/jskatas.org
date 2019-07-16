import {h, Component} from 'preact';

import HeaderComponent from './header';
import FooterComponent from './footer';

class Page extends Component {
  render({}, {showDescriptions = false}) {
    const {kataBundles} = this.props;
    return (
      <div>
        <HeaderComponent />
        <p id="filterbar">
          <input id="show-descriptions" type="checkbox" checked={this.state.showDescriptions} onClick={e => this.toggle(e)}/>
          <label htmlFor="show-descriptions">Show descriptions</label>
        </p>
        <p style={{padding: '1rem'}}>
          I learned ES6 by writing it and failing. Out of this the es6katas
          evolved. And since, this allowed me to always again go back and
          (re-)learn ES6 I wrote katas for ES8, later ES1 (I always got the{' '}
          <code>sort()</code> function wrong). At some point I started to learn
          a very expressive assertion library{' '}
          <a href="https://github.com/rluba/hamjest">hamjest</a> by writing
          katas for it, and so this page came about.
          <br />
          Enjoy and I hope you have fun learning with it.
          <br />
          Wolfram Kriesing
        </p>
        {kataBundles.map(kataBundle => (
          <KataBundle bundle={kataBundle} options={this.state} />
        ))}
        <FooterComponent katasCount={95} />
      </div>
    );
  }
  toggle(e) {
    this.setState({showDescriptions: e.target.checked});
  }
}

class KataBundle extends Component {
  render() {
    const {bundle, options} = this.props;
    return (
      <div>
        <h2>{bundle.name}</h2>
        {bundle.allGroups().map(group => (
          <KataGroup
            group={group}
            isNewestKataCheck={bundle.isNewestKata.bind(bundle)}
            key={group.name}
            options={options}
          />
        ))}
      </div>
    );
  }
}

class KataGroup extends Component {
  render() {
    const {group, options, isNewestKataCheck} = this.props;
    return (
      <div className="group">
        <h3>{group.name}</h3>
        {group.katas.map(kata => (
          <Kata kata={kata} isNewest={isNewestKataCheck(kata)} key={kata.id} options={options} />
        ))}
      </div>
    );
  }
}

class Kata extends Component {
  render() {
    const {kata, isNewest, options} = this.props;
    const {url, name, level, isPublished} = kata;
    const marker = new Map([
      [true, ''], // the default value
      [level === 'BEGINNER', <span className="notification-bubble easy">easy</span>],
      [isNewest , <span className="notification-bubble new">new</span>],
      [!isPublished, <span className="notification-bubble unpublished">planned</span>],
    ]).get(true);
    const classNames = ['kata'];
    if (!isPublished) classNames.push('unpublished');
    const description = options.showDescriptions
      ? <p className="description">{kata.description}</p>
      : null;
    return (
      <div>
        <div className={classNames.join(' ')}>
          <a href={url} target="_blank">
            <kata-name>{name}</kata-name>
          </a>
          {marker}
          <KataDetails kata={kata} />
        </div>
        {description}
      </div>
    );
  }
}

class KataDetails extends Component {
  render() {
    const {kata} = this.props;
    return (
      <span className="details">
        <h3>
          {kata.name} (#{kata.id})
        </h3>
        <p>{kata.description}</p>
        Difficulty: {kata.level.toLowerCase()}
        <br />
        <KataLinks links={kata.links} />
      </span>
    );
  }
}

class KataLinks extends Component {
  render() {
    const {links = []} = this.props;
    if (links.length === 0) {
      return null;
    }
    return (
      <section>
        <h3>Links for futher reading</h3>
        <ul>
          {links.map(link => (
            <li>
              <a href={link.url}>{link.comment}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export {Kata, Page};