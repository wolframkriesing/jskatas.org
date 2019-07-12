import {h, Component} from 'preact';

import HeaderComponent from './header';
import FooterComponent from './footer';

export default class Page extends Component {
  render() {
    const {kataBundles} = this.props;
    return (
      <div>
        <HeaderComponent />
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
          <KataBundle bundle={kataBundle} />
        ))}
        <FooterComponent katasCount={100} />
      </div>
    );
  }
}

class KataBundle extends Component {
  render() {
    const {bundle} = this.props;
    return (
      <div>
        <h2>{bundle.name}</h2>
        {bundle.allGroups().map(group => (
          <KataGroup
            group={group}
            isNewestKataCheck={bundle.isNewestKata.bind(bundle)}
            key={group.name}
          />
        ))}
      </div>
    );
  }
}

class KataGroup extends Component {
  render() {
    const group = this.props.group;
    const {isNewestKataCheck} = this.props;
    return (
      <div className="group">
        <h3>{group.name}</h3>
        {group.katas.map(kata => (
          <Kata kata={kata} isNewest={isNewestKataCheck(kata)} key={kata.id} />
        ))}
      </div>
    );
  }
}

class Kata extends Component {
  render() {
    const {kata, isNewest} = this.props;
    const {url, name, level} = kata;
    const marker = isNewest ? (
      <span className="notification-bubble new">new</span>
    ) : level === 'BEGINNER' ? (
      <span className="notification-bubble easy">easy</span>
    ) : (
      ''
    );
    return (
      <div className="kata">
        {marker}
        <a href={url} target="_blank">
          <KataName name={name} />
        </a>
        <KataDetails kata={kata} />
      </div>
    );
  }
}

class KataName extends Component {
  render() {
    const classNames = [];

    const renderWithName = name => <span className={classNames}>{name}</span>;

    const {name} = this.props;
    if (name.startsWith('`') && name.endsWith('`')) {
      classNames.push('code');
      const sourceCode = name.substr(1, name.length - 2);
      return renderWithName(sourceCode);
    }
    return renderWithName(name);
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
