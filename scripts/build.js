import fs from 'fs';
import path from 'path';

const ssrRender = (renderToFile, htmlFile, destHtmlFile) => {
  const ssr = fs.readFileSync(renderToFile, 'utf8');
  const indexHtml = fs.readFileSync(htmlFile, 'utf8');

  const openingHtml = '<div id="app">';
  const closingHtml = '</div>';

  const prerenderedHtml = indexHtml.replace(
    openingHtml + closingHtml,
    openingHtml + ssr + closingHtml,
  );
  fs.writeFileSync(destHtmlFile, prerenderedHtml);
};

ssrRender(
  path.join(__dirname, '../tmp/bundles-ssr-rendered.html'),
  path.join(__dirname, '../src/bundles.html'),
  path.join(__dirname, '../dist/index.html')
);
ssrRender(
  path.join(__dirname, '../tmp/overview-ssr-rendered.html'),
  path.join(__dirname, '../src/overview.html'),
  path.join(__dirname, '../dist/overview.html')
);
