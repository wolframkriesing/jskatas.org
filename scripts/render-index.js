import fs from 'fs';
import path from 'path';
import {render} from '../transpiled/server/index.js';

(async () => {
  const indexHtmlFile = path.join(__dirname, '../src/index.html');
  const indexHtml = fs.readFileSync(indexHtmlFile).toString();
  const renderedHtml = await render();
  const fullIndexHtml = indexHtml.replace('${prerenderedHtml}', renderedHtml);
  console.log(fullIndexHtml);
})();
