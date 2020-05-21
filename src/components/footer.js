import {TDDBIN_URL, REPO_URL, ANALYTICS_URL} from '../env.js';
import {html} from '../lit-html.js';

const FooterComponent = ({katasCount}) => {
  return html`
    <footer>
      <ul>
        <li>by</li>
        <li>
          <a href="http://twitter.com/wolframkriesing">
            <i class="fa fa-twitter"></i>Wolfram Kriesing
          </a>
        </li>
        <li>
          <a href="https://picostitch.com">
            I am blogging at picostitch.com
          </a>
        </li>
        <li>
          <a href="https://picostitch.com/about/#impressum-germany"> <i class="fa fa-paragraph"></i>imprint </a>
        </li>
        <li>
          <b style="color: lightpink">You have a job where I can write katas all day?
          <br/><a href="http://twitter.com/wolframkriesing" style="color: lightpink; text-decoration: underline">LET ME KNOW!!!</a></b>
        </li>
      </ul>

      <ul>
        <li>
          <a href=${TDDBIN_URL}>uses TDDbin</a>
        </li>
        <li>${katasCount} katas</li>
      </ul>

      <ul>
        <li>
          <a href=${REPO_URL}>
            <i class="fa fa-github"></i>source of this site
          </a>
        </li>
        <li>
          <a href="https://github.com/tddbin/katas">
            <i class="fa fa-github"></i>all katas
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jskatas">
            <i class="fa fa-twitter"></i>JS Katas
          </a>
        </li>
        <li class="disabled"><i class="fa fa-rss"></i>RSS</li>
        <li>
          <a href=${ANALYTICS_URL}>
            <i class="fa fa-line-chart"></i>Analytics by plausible.io
          </a>
        </li>
      </ul>
    </footer>
  `;
};

export {FooterComponent};
