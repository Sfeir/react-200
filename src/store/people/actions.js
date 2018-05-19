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

export const peopleRequestedUsing = fetchPeople => () => dispatch => {
  dispatch({ type: PEOPLE_REQUESTED });
  return fetchPeople()
    .then(people => {
      dispatch(peopleReceived(people));
      return true;
    })
    .catch(e => {
      return false;
    });
};

export const personUpdatedUsing = updatePerson => (id, patch) => dispatch => {
  dispatch({ type: PERSON_UPDATED });
  return updatePerson(id, patch)
    .then(person => {
      dispatch(personReceived(person));
      return true;
    })
    .catch(e => {
      return false;
    });
};
