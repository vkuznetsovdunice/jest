import { myFunction } from './index';


describe('Function myFunction', () => {
    // result with correct data
    const result  = [{ a: 4, b: -4, }, { a: 5, b: -5, },]
    const a       = [{ a: 1, b: -1, }, { a: 2, b: -2, }, { a: 3, b: -3, }, { a: 4, b: -4, }, { a: 5, b: -5, }];
    const filters = [{ key: 'a', cond: 'gt', gt: 2, }, { key: 'b', cond: 'lt', lt: -3,},];
    const sort    = [{ key: 'a', asc: true,}, {key: 'b', asc: false,},];

    Object.freeze(a);
    Object.freeze(filters);
    Object.freeze(sort);
    Object.freeze(result);
    
    test('call with an empty array, if for some reason it is not populated', () => {
        expect(myFunction([], filters, sort)).toBeDefined();
    });
    
    test('call with an empty filters, if for some reason it is not populated', () => {
        expect(myFunction(a, [], sort)).toEqual(a);
    });
    
    test("Array sort don used in function, call with empty array don't change the result", () => {
        expect(myFunction(a, filters, [])).toEqual(result);
    });
})

describe('Function myFunction', () => {
    // result with correct data
    const result  = [{ a: 4, b: -4, }, { a: 5, b: -5, },]
    const a       = [{ a: 1, b: -1, }, { a: 2, b: -2, }, { a: 3, b: -3, }, { a: 4, b: -4, }, { a: 5, b: -5, }];
    const filters = [{ key: 'a', cond: 'gt', gt: 2, }, { key: 'b', cond: 'lt', lt: -3,},];
    const sort    = [{ key: 'a', asc: true,}, {key: 'b', asc: false,},];

    Object.freeze(a);
    Object.freeze(filters);
    Object.freeze(sort);
    Object.freeze(result);

    test('call with correct data. Cleanliness check', () => {
        const localResult = myFunction(a, filters, sort);
        expect(myFunction(a, filters, sort)).toEqual(localResult);
    });
    
    test('call with array where some of fields is null', () => {
        // array with null values
        const testArrayWithNull = [{ a: 2, b: null, }, { a: 5, b: -5, }, { a: null, b: -3, }, { a: 1, b: -1, }, { a: null, b: -4, },];
        expect(myFunction(testArrayWithNull, filters, sort)).toBeDefined();
    });
    
    test('call with filters where some of fields in array is null', () => {
        const filtersWithNull = [{ key: 'a', cond: 'gt', gt: null,}, { key: 'b', cond: null, lt: -3,},];
        expect(() => { myFunction(a, filtersWithNull, sort) }).toThrow();
    });
})