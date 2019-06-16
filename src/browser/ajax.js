export const loadViaAjax = (url) => {
  return window.fetch(url)
    .then(response => response.json())
    .catch(e => onLoaded(e));
};
