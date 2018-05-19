export const replaceOrPrepend = match => (item, list) =>
  list.some(li => match(li, item))
    ? list.map(li => (match(li, item) ? item : li))
    : [item, ...list];

export const succ = (current, min, max) =>
  current === max ? min : current + 1;

export const pred = (current, min, max) =>
  current === min ? max : current - 1;

export const freeze = thing => {
  if (typeof thing === 'object') {
    Object.freeze(thing);
    Object.keys(thing).forEach(prop => freeze(thing[prop]));
  }
  return thing;
};
