import { myFunction, a, filters, sort } from './index';

// result with correct data
const result = [
    { 
        a: 4, 
        b: -4,
    }, 
    { 
        a: 5, 
        b: -5, 
    },
]

// the original array was sorted, stretch the array with the mixed positions of the objects
const testArray = [
    { 
        a: 2, 
        b: -2, 
    }, 
    { 
        a: 5, 
        b: -5, 
    }, 
    { 
        a: 3, 
        b: -3, 
    }, 
    { 
        a: 1, 
        b: -1,
    }, 
    { 
        a: 4, 
        b: -4, 
    },
];

// array with null values
const testArrayWithNull = [
    { 
        a: 2, 
        b: null, 
    }, 
    { 
        a: 5, 
        b: -5, 
    }, 
    { 
        a: null, 
        b: -3, 
    }, 
    { 
        a: 1, 
        b: -1, 
    }, 
    { 
        a: null, 
        b: -4, 
    },
];


describe('Function myFunction', () => {
    test('call with an empty array, if for some reason it is not populated', () => {
        expect(myFunction([], filters, sort)).toBeDefined();
    });
    
    test('call with an empty filters, if for some reason it is not populated', () => {
        expect(myFunction(a, [], sort)).toEqual(a);
    });
    
    test("Array sort don used in function, call with empty array don't change the result", () => {
        expect(myFunction(a, filters, [])).toEqual(result);
    });
    
    test('call with correct data. Cleanliness check', () => {
        const localResult = myFunction([], filters, sort);
        expect(myFunction([], filters, sort)).toEqual(localResult);
    });
    
    test('call for testing of sort', () => {
        expect(myFunction(testArray, filters, sort)).toEqual(result);
    });
    
    test('call with array where some of fields is null', () => {
        expect(myFunction(testArrayWithNull, filters, sort)).toBeDefined();
    });
    
    test('call with filters where some of fields in array is null', () => {
        expect(() => { myFunction(a, filtersWithNull, sort) }).toThrow();
    });
})