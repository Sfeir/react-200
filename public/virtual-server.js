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

const fetchInitial = async () => {
  const result = await fetch('people.json');
  const people = await result.json();
  return arrayToMap('id')(people);
}

let people = fetchInitial();

const updatePerson = async (person) => {
  const current = await people;
  return Object.assign({}, current, {[person.id]: person});
}

const savePerson = async (request) => {
  const id = request.parameters.id;
  const person = await request.json();
  
  if (person.id !== id) {
    return new Response(undefined, { status: 404, statusText: 'not found' });
  }
  
  people = updatePerson(person);
  return new Response(undefined, { status: 204, statusText: 'no content' });
}

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
worker.put('/api/people/:id', savePerson);

// prevent unknown api calls
worker.use('/api/*', (req, res) => (
  res
  ? [req, res]
  : new Response(undefined, { status: 400, statusText: 'Bad Request' })
)); 

worker.init();
