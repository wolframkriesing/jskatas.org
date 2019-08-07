import fetch from 'isomorphic-fetch';

export const loadViaAjax = url => fetch(url).then(response => response.json());
