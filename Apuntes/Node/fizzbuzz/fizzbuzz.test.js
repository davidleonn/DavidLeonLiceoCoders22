const fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz', () => {
    test("test", () => {
        expect(true).toBe(true);
    });

    test("Debe devolver 0 si le paso un 0", () => {
        const expected = 0;
        const result = fizzbuzz(0);
        expect(expected).toBe(result);
    });

    test("Debe devolver 1 si le paso un 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizz' si le paso un 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizz' si le paso un 9", () => {
        const expected = 'fizz';
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizz' si le paso un 18", () => {
        const expected = 'fizz';
        const result = fizzbuzz(18);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizz' si contiene un 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(43);
        expect(expected).toBe(result);
    });
    

    test("Debe devolver 'buzz' si le paso un 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'buzz' si le paso un 10", () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });
    test("Debe devolver 'buzz' si le paso un 25", () => {
        const expected = 'buzz';
        const result = fizzbuzz(25);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizzbuzz' si le paso un 15", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizzbuzz' si le paso un 30", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(30);
        expect(expected).toBe(result);
    });
    
});