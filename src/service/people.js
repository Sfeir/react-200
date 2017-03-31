export async function fetchPeople() {
  const result = await fetch('api/people');
  return await result.json();
}

export async function savePerson(person) {
  const result = await fetch(`api/people/${person.id}`, {
    method: 'PUT',
    body: JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (result.status !== 204) throw result.statusText;
  return true;
}
