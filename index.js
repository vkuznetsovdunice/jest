export const myFunction = (array, filters, sort) => {
  const _filterConds = {
    gt(key, value, item) {
      return item[key] > value;
    },
    lt(key, value, item) {
      return item[key] < value;
    },
  };

  const _filters = filters.map((filter) => _filterConds[filter.cond].bind(null, filter.key, filter[filter.cond]));
  // 'a' was global defined and using global 'a' array, change 'a' -> 'array'
  return array.filter((item) => {
    return _filters.every((filter) => filter(item));
  })
};

