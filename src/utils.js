export const replaceOrPrepend = match => (item, list) => (
  list.some(li => match(li, item))
  ? list.map(li => match(li, item) ? item : li)
  : [item, ...list]
);

export const replaceOrPrependById = replaceOrPrepend((a, b) => a.id === b.id);

export const freeze = thing => {
  if (typeof thing === 'object') {
    Object.freeze(thing);
    Object.keys(thing).forEach(prop => freeze(thing[prop]));
  }
  return thing;
};
