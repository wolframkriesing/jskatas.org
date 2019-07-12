import fetch from 'isomorphic-fetch';

export const loadViaNode = url => fetch(url).then(response => response.json());
