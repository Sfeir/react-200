export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PERSON_RECEIVED = 'PERSON_RECEIVED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';

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

export function searchChanged(search) {
  return {
    type: SEARCH_CHANGED,
    search
  };
}
