import fs from 'fs';
import path from 'path';

const DIST_INDEX_HTML = path.join(__dirname, '../dist/index.html');
const SSR_RENDERED = path.join(__dirname, '../tmp/bundles-ssr-rendered.html');
const SRC_INDEX_HTML = path.join(__dirname, '../src/bundles.html');

const ssr = fs.readFileSync(SSR_RENDERED, 'utf8');
const indexHtml = fs.readFileSync(SRC_INDEX_HTML, 'utf8');

const openingHtml = '<div id="app">';
const closingHtml = '</div>';

const prerenderedHtml = indexHtml.replace(
  openingHtml + closingHtml,
  openingHtml + ssr + closingHtml,
);
fs.writeFileSync(DIST_INDEX_HTML, prerenderedHtml);
