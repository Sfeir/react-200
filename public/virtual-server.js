/* global importScripts, ServiceWorkerWare */

importScripts('sww.js');
const worker = new ServiceWorkerWare();

// setup state

const arrayToMap = property => array => (
  array
  .reduce((map, item) => Object.assign(map, { [item[property]]: item }), {})
);

const mapToArray = map => (
  Object.keys(map)
  .map(key => map[key])
);

let people = (
  fetch('people.json')
  .then(res => res.json())
  .then(arrayToMap('id'))
);

// response utils

const createJsonResponse = body => (
  new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' }
  })
);

const simulateLatency = body => (
  new Promise(resolve => setTimeout(() => resolve(body), 300))
);

const jsonResponse = bodyPromise => (
  bodyPromise
  .then(simulateLatency)
  .then(createJsonResponse)
);

// setup routes

worker.get('/api/people', () => jsonResponse(people.then(mapToArray)));

// prevent unknown api calls
worker.use('/api/*', (req, res) => (
  res
  ? [req, res]
  : new Response(undefined, { status: 400, statusText: 'Bad Request' })
)); 

worker.init();
