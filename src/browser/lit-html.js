const LITHTML_OFFLINE_PATH = '/node_modules/lit-html/lit-html.js';
const LITHTML_ONLINE_PATH = 'https://unpkg.com/lit-html?module';
const isOnline = navigator.onLine;
const forceOffline = new URLSearchParams(location.search).has('offline');
const LITHTML_PATH = (
    forceOffline || !isOnline 
    ? LITHTML_OFFLINE_PATH
    : LITHTML_ONLINE_PATH 
);

export const loadLitHtml = async () => {
  window.litHtml = await import(LITHTML_PATH);
};
