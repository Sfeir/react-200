export const SEARCH_CHANGED = 'SEARCH_CHANGED';

export function searchChanged(search) {
  return {
    type: SEARCH_CHANGED,
    search
  };
}
