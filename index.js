export const a = [{ a: 1, b: -1 }, { a: 2, b: -2 }, { a: 3, b: -3 }, { a: 4, b: -4 }, { a: 5, b: -5 }];

export const filters = [
  {
    key: 'a',
    cond: 'gt',
    gt: 2,
  },
  {
    key: 'b',
    cond: 'lt',
    lt: -3,
  },
];

export const sort = [
  {
    key: 'a',
    asc: true,
  },
  {
    key: 'b',
    asc: false,
  },
];

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
  return a.filter((item) => {
    return _filters.every((filter) => filter(item));
  })
};

