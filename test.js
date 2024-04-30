// test/test.js

const { expect } = require('chai');
const math = require('../math');

describe('Math module', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(math.add(2, 3)).to.equal(5);
        });
    });

    describe('subtract', () => {
        it('should return the difference between two numbers', () => {
            expect(math.subtract(5, 3)).to.equal(2);
        });
    });

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(math.multiply(2, 3)).to.equal(6);
        });
    });

    describe('divide', () => {
        it('should return the quotient of two numbers', () => {
            expect(math.divide(10, 2)).to.equal(5);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => math.divide(5, 0)).to.throw('Cannot divide by zero');
        });
    });
});