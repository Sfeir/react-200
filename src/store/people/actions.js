export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PERSON_RECEIVED = 'PERSON_RECEIVED';

export const PEOPLE_REQUESTED = 'PEOPLE_REQUESTED';
export const PERSON_UPDATED = 'PERSON_UPDATED';

export function peopleReceived(people) {
  return {
    type: PEOPLE_RECEIVED,
    people
  };
}

export function personReceived(person) {
  return {
    type: PERSON_RECEIVED,
    person
  };
}

export const peopleRequestedUsing = fetchPeople => () =>
  (dispatch) => {
    // what should this thunk do ?
  };

export const personUpdatedUsing = updatePerson => (id, patch) =>
  (dispatch) => {
    // what should this thunk do ?
  };