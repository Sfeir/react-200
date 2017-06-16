/* global importScripts, ServiceWorkerWare */
/* global arrayToMap, mapToArray, jsonResponse, emptyResponse */

importScripts('sww.js');
importScripts('utils.js');
const worker = new ServiceWorkerWare();


// setup state
 
const fetchInitial = async () => {
  const result = await fetch('people.json');
  const people = await result.json();
  return arrayToMap('id')(people);
}

let state = fetchInitial();

const findPerson = async (id) => {
  const people = await state;
  const person = people[id];
  if (person === undefined) throw new Error("not found");
  return person;
}

const updateOrInsertPerson = (person) => {
  state = state.then(people =>
    Object.assign({}, people, {[person.id]: person})
  );
}


// request handlers

const getPeople = async () => {
  const people = await state;
  const peopleArray = mapToArray(people);
  return jsonResponse(peopleArray);
}

const getPerson = async (req) => {
  try {
    const person = await findPerson(req.parameters.id);
    return jsonResponse(person);
  } catch (e) {
    return emptyResponse(404);
  }
}

const patchPerson = async (req) => {
  try {
    const [person, patch] = await Promise.all([
      findPerson(req.parameters.id),
      req.json()
    ]);
    if (patch.id !== undefined && patch.id !== person.id) throw new Error("bad request");
    const updatedPerson = Object.assign({}, person, patch);
    updateOrInsertPerson(updatedPerson);
    return emptyResponse(204);
  } catch (e) {
    return emptyResponse(400);
  }  
}


// setup routes

worker.get('/api/people', getPeople);
worker.get('/api/people/:id', getPerson);
worker.patch('/api/people/:id', patchPerson);

// prevent unknown api calls
worker.use('/api/*', (req, res) => (
  res
  ? [req, res]
  : new Response(undefined, { status: 400, statusText: 'Bad Request' })
)); 

worker.init();
