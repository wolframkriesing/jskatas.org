import {h, Component} from 'preact';

export default class FooterComponent extends Component {
  render() {
    const {katasCount} = this.props;
    return (
      <footer>
        <ul>
          <li>by</li>
          <li>
            <a href="http://twitter.com/wolframkriesing">
              <i className="fa fa-twitter"></i>Wolfram Kriesing
            </a>
          </li>
          <li>
            <a href="/imprint">
              <i className="fa fa-paragraph"></i>imprint
            </a>
          </li>
        </ul>
        
        <ul>
          <li>
            <a href={process.env.TDDBIN_URL}>uses TDDbin</a>
          </li>
          <li>{katasCount} katas</li>
        </ul>
        
        <ul>
          <li>
            <a href={process.env.REPO_URL}>
              <i className="fa fa-github"></i>source of this site
            </a>
          </li>
          <li>
            <a href="https://github.com/tddbin/katas">
              <i className="fa fa-github"></i>all katas
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jskatas">
              <i className="fa fa-twitter"></i>JS Katas
            </a>
          </li>
          <li className="disabled">
            <i className="fa fa-rss"></i>RSS
          </li>
          <li>
            <a href={process.env.ANALYTICS_URL}>
              <i className="fa fa-line-chart"></i>Analytics by plausible.io
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
