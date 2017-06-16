'use strict';

const arrayToMap = property => array => (
  array
  .reduce((map, item) => Object.assign(map, { [item[property]]: item }), {})
);

const mapToArray = map => (
  Object.keys(map)
  .map(key => map[key])
);

const delay = duration => x => (
  new Promise(resolve => setTimeout(() => resolve(x), duration))
);

const jsonResponse = body => (
  delay(300)(new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' }
  }))
);

const emptyResponse = status => (
  delay(150)(new Response(undefined, { status }))
);

self.arrayToMap = arrayToMap;
self.mapToArray = mapToArray;
self.jsonResponse = jsonResponse;
self.emptyResponse = emptyResponse;