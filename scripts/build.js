import fs from 'fs';
import path from 'path';

const ssr = fs.readFileSync(path.join(__dirname, '../tmp/ssr-result.html'), 'utf8');
const indexHtml = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf8');

const openingHtml = '<div id="app">';
const closingHtml = '</div>';

const prerenderedHtml = indexHtml.replace(openingHtml+closingHtml, openingHtml+ssr+closingHtml);
fs.writeFileSync(path.join(__dirname, '../dist/index.html'), prerenderedHtml);