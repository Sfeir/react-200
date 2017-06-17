export const DISCOVER_NEXT = 'DISCOVER_NEXT';
export const DISCOVER_PREV = 'DISCOVER_PREV';

export function discoverNext(total) {
  return {
    type: DISCOVER_NEXT,
    total
  };
}

export function discoverPrev(total) {
  return {
    type: DISCOVER_PREV,
    total
  };
}
