export const loadViaAjax = url =>
  window.fetch(url).then(response => response.json());
