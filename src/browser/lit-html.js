const LITHTML_OFFLINE_PATH = '/node_modules/lit-html/lit-html.js';
const LITHTML_ONLINE_PATH = 'https://unpkg.com/lit-html?module';
const LITHTML_PATH = navigator.onLine ? LITHTML_ONLINE_PATH : LITHTML_OFFLINE_PATH;

export const loadLitHtml = async () => {
  window.litHtml = await import(LITHTML_PATH);
};
