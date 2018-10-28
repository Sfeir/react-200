export async function fetchPeople() {
  const response = await fetch('//localhost:3001/people');
  return await response.json();
}

export async function updatePerson(id, patch) {
  const response = await fetch(`//localhost:3001/people/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}
