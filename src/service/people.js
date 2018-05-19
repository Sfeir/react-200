export async function fetchPeople() {
  const response = await fetch('/api/people');
  return await response.json();
}

export async function updatePerson(id, patch) {
  const response = await fetch(`/api/people/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}
